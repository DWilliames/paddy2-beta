# Paddy 2 – Beta

I've began completely rewriting the [Paddy Sketch plugin](https://github.com/DWilliames/paddy-sketch-plugin) in a way that means I can do a lot more with it.

I have a lot planned for what I want to do with this next version; one of the key things is to make it a lot more stable.

Treat this as the **'Beta program'** for Paddy. If you are up for it; play around with it, and let me know what is working and what isn't.

As you can see via the 'Todo list', not everything has been implemented yet – so bare with me, as I slowly implement it all. I'm trying to lock down the core things now (Padding / Spacing / Alignment); and then I'll move onto the complexities of symbols / nested symbols.


## Getting started

This will be installed separately to 'Paddy', called 'Paddy2'; eventually I'll make it the same thing once it is ready.

**Testing:**
* **Disable Paddy 1:** Make sure 'Paddy' isn't enabled
* **Disable Anima Toolkit:** Make sure 'Anima Toolkit' is not enabled; right now for some reason, they don't play nice together
* **Restart sketch:** this is very important. Every time you re-enable 'Paddy 2', if it's not working, try restarting Sketch.

🙌 **Bugs:** Please report any issues that you find. Keep in mind, not everything has been implemented yet; see the 'Todo list' below. So only report on stuff not working if it has a 'tick' already against it.

💡 **Feature requests:** Got any other ideas you want to be on Paddy's roadmap; please submit them as an 'Issue', and I'll add them to this list.



## Key differences

Compared to 'Paddy 1' there are a few key differences that have been built so far:

* Setting the properties via the layer name is optional – you can now set them via the inspector panel too.
* A lot faster. In my couple of tests I benchmarked; this came out at being around 30x faster!!
* This approach will allow for 'Nested symbols'. Although, it's not currently enabled in the beta, it is something I think I've managed to crack


## Todo list

### Automatic re-layout

- [x] Re-layout ancestors after moving a layer
- [x] Re-layout ancestors and children after re-sizing a group
- [x] Re-layout ancestors after changing Text layer value
- [ ] Re-layout layers after changing symbol overrides
- [x] Don't re-layout after selection changes from 'un-doing' (e.g. CMD + Z)
- [x] Re-layout after deselecting everything; as a 'catch-all' if it hasn't already been layed out

---

### Spacing / Stacking

- [x] Read properties from layer name
- [x] Save Stack properties to the layer – so it doesn't *have* to be read from the layer name
- [x] Vertical Stacking
- [x] Horizontal Stacking
- [x] Infer stacking properties from layers when they are turned into a 'stack group'
- [x] Collapse hidden views – will ignore layers that are hidden
- [x] Re-layout after hiding a layout; if 'collapsing' is turned on
- [x] Re-layout after duplicating via CMD + D
- [x] Re-layout after deleting layer
- [ ] Re-layout after deleting layers in Sketch v50 (seems to work in previous versions)
- [x] Re-layout after pasting a new layer into a Stack group
- [x] Pixel fit the spacing – based on the user's preferences
- [ ] Allow multiple spacing values – e.g. (10 20) would alternate spacing 10 and 20 pixels
#### User interface
- [x] Show a view in the inspector when eligible to create a stack group
- [x] Show UI in the inspector to manipulate the stack vie properties
- [x] Show option to 'remove' the stack group from within the inspector
- [x] Change the icon of the 'Stack group' in the layer list to make it stand out
- [ ] Update the 'Stack group' icon, to something better
- [x] Re-layout the layers after changing the spacing/orientation from within the inspector UI

---

### Alignment

- [x] Read properties from layer name
- [x] Save alignment properties to layer data – so it doesn't *have* to be read from the layer name
- [x] Allow multiple alignment values
- [x] Pixel fit the alignment – based on the user's preferences
#### User interface
- [x] Show an 'Alignments' view within the inspector for all groups
- [x] Allow only one vertical alignment, and one horizontal alignment from within the UI
- [x] Re-layout the layers as soon as the alignment value is changed from the Inspector
- [ ] Custom icon for each 'alignment group' within the layer list
- [ ] Handle setting Alignment to more than one group at once
- [ ] Hide vertical/horizontal alignment, based on if the group is stacked; and which direction it is stacked

---

### Padding

- [x] Read padding from layer name
- [x] Save padding to layer data – so it doesn't *have* to be read from the layer name
- [x] Shape layers as 'background' layer
- [x] Ignore layers beginning with '-'
- [ ] Allow multiple layers to have padding
- [x] Symbol instances as 'background' layer
- [ ] Adjust sibling layers to match the correct size after resizing the padding layer directly!! (This is a big one! Tricky to do; but a real new timesaver.)
#### User interface
- [x] Show padding values within the inspector
- [ ] Show a custom icon for a 'background' layer with padding within the layer list
- [x] Re-layout the layers after changing the padding properties from within the Inspector
- [x] Add a button to 'add' padding to a layer from within the inspector
- [ ] Infer the padding properties when 'adding' padding
- [x] Having a button to remove Padding
- [x] Have a toggle to turn padding on/off
- [ ] Toggle the number of input fields; from 4 to 2 to 1. (By clicking on the input field labels, like on the colour picker RGB/HSV)

---

### Advanced sizing

- [ ] Min / max width
- [ ] Min / max height
#### User interface
- [x] Have a 'settings' button in the inspector when a layer has 'padding' to get to the 'advanced settings'
- [ ] Show UI to set min / max height / width
- [ ] Re-layout after changing the 'advanced sizing'

---

### Ignoring

- [x] Read 'ignore' layer from the '-' prefix on a layer name
- [x] Save the 'ignore' layer to the layer data
#### User interface
- [x] Show 'ignore layer' in the Inspector
- [x] Set the 'ignore layer' value on the selected layers when changing in the inspector
- [ ] Add a custom icon if the layer should be ignored

---

### User settings

- [ ] Turn auto-updating on/off
- [ ] Show/hide the views in the inspector

---

### Installing / Updating

- [x] Alert to restart Sketch after installing a new version of the plugin

---

### Symbols

TODO: Update the todo list here

- [ ] After detaching group, re-layout the detached group
- [ ] Fix 'trailing' layers, after detaching from symbol

---

### Nested symbols

TODO: Update the todo list here

---

### Migration

- [ ] Command to convert 'Anima Stack groups' to 'Paddy' stack groups
