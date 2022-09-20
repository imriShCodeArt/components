import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Box from "@mui/material/Box";
import StepLabel from "@mui/material/StepLabel";
import StepButton from "@mui/material/StepButton";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Stepper = ({
  currentStep,
  optionalSteps,
  steps,
  successMessege,
  errorMessege,
  resetButtonText,
  finishButtonText,
  nextButtonText,
  backButtonText,
  skipButtonText,
  optionalLabel,
  externalUpdate,
  allowReset,
  nonLinear,
  alternativeLabel,
  orientation,
  sx,
}) => {
  const [activeStep, setActiveStep] = React.useState(currentStep || 0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [completed, setCompleted] = React.useState({});

  React.useEffect(() => {
    externalUpdate && externalUpdate({ ...{ activeStep, skipped, completed } });
  }, [activeStep]);

  const totalSteps = () => {
    return steps.length-1;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps();
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps() ;
  };

  const isStepOptional = (step) => {
    const checkIfOpt =
      typeof optionalSteps === typeof []
        ? optionalSteps.length === 1
          ? step === optionalSteps[0]
          : optionalSteps.map((s) => step === s).filter((f) => f)[0] || false
        : step === optionalSteps;
    return checkIfOpt;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    console.log(allStepsCompleted());
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setCompleted((val) => ({ ...val, [activeStep]: true }));
    isLastStep()
      ? allStepsCompleted()
        ? setActiveStep(newActiveStep)
        : steps.findIndex((step, i) => !(i in completed))
      : setActiveStep(newActiveStep);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error(errorMessege);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    setSkipped(new Set());
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const controls =
    activeStep === steps.length ? (
      <React.Fragment>
        {successMessege}
        {allowReset && (
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>{resetButtonText}</Button>
          </Box>
        )}
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color='inherit'
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            {backButtonText}
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          {isStepOptional(activeStep) && (
            <Button color='inherit' onClick={handleSkip} sx={{ mr: 1 }}>
              {skipButtonText}
            </Button>
          )}

          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? finishButtonText : nextButtonText}
          </Button>
        </Box>
      </React.Fragment>
    );

  return (
    <Box sx={{ width: "100%", mt:'1.5em', ...sx }}>
      <Root
        orientation={orientation}
        nonLinear={nonLinear}
        activeStep={activeStep}
        alternativeLabel={alternativeLabel}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = optionalLabel;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step completed={completed[index]} key={label} {...stepProps}>
              {nonLinear ? (
                <StepButton onClick={handleStep(index)}>
                  {`${label} (`}
                  {optionalLabel}
                  {")"}
                </StepButton>
              ) : (
                <StepLabel {...labelProps}>{label}</StepLabel>
              )}
            </Step>
          );
        })}
      </Root>
      {orientation === "horizontal" && controls}
    </Box>
  );
};

Stepper.propTypes = {
  currentStep: PropTypes.number,
  optionalSteps: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  successMessege: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  optionalLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  resetButtonText: PropTypes.string,
  finishButtonText: PropTypes.string,
  nextButtonText: PropTypes.string,
  backButtonText: PropTypes.string,
  skipButtonText: PropTypes.string,
  externalUpdate: PropTypes.func,
  allowReset: PropTypes.bool,
  nonLinear: PropTypes.bool,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
};
Stepper.defaultProps = {
  resetButtonText: "Reset",
  finishButtonText: "Finish",
  nextButtonText: "Next",
  backButtonText: "Back",
  skipButtonText: "Skip",
  errorMessege: "You can't skip a step that isn't optional.",
  allowReset: true,
  nonLinear: true,
  optionalLabel: <Typography variant='caption'>Optional</Typography>,
  orientation: "horizontal",
};

export default Stepper;
