###### component:

# FormField

#### description:

- Use FormField componment inside of a Form wrapper (from: shared/providers/Form) to automatically
  hook the events functions each field to the parent Form component by context.

#### props:

- alertMessege: {
    id:             string. for 'react-intl' to find the messege by id.
    description:    give yourself a note about the role of the messege in your UI
    defaultMessege: Write this messege in the default language you're going to use in the UI
    }
- BoxProps:     give props to the Box component that wraps the whole content
- InputProps:   the material-ui 'TextField''s prop
- type:         the material-ui 'TextField''s prop
- name:         DOM attribute
- id:           DOM attribute
- variant:      the material-ui 'TextField''s prop
- label:        the material-ui 'TextField''s prop
- placeholder:  DOM attribute
- sx:           the material-ui 'TextField''s prop
