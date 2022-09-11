###### component:
# Badge

#### description:
- Badge generates a small badge to the top-right of its child(ren).

#### props:
- color: oneOf(["inherit", "primary", "secondary", "info", "warning", "success", "default",])
- element: a single child
- badgeContent: number
- invisible: bool
- showZero: if content equals to zero, show '0' or hide badge? (hides by default).
- max: largest number to appear before stop counting.
- variant: 'dot' or 'standard'.
- overlap: should be determined by the shape of the child element, if it's a circular object, then the same should apply to the badge, etc...
- top/right/left/bottom: badge alignment, by default it sticks to the top and to the right.
