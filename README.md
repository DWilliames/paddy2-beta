# Paddy 2 – Beta

I've began completely rewriting the [Paddy Sketch plugin](https://github.com/DWilliames/paddy-sketch-plugin) in a way that means I can do a lot more with it.

I have a lot planned for what I want to do with this next version; one of the key things is to make it a lot more stable.

Treat this as the **'Beta program'** for Paddy. If you are up for it; play around with it, and let me know what is working and what isn't.

As you can see via the 'Todo list', not everything has been implemented yet – so bare with me, as I slowly implement it all. I'm trying to lock down the core things now (Padding / Spacing / Alignment); and then I'll move onto the complexities of symbols / nested symbols.


## Getting started

**Warning: Please use the Beta version at your own risk. I don't want be responsible for possibly 'ruining' your very important Sketch document 😜**

This will be installed separately to 'Paddy', called 'Paddy2'; eventually I'll make it the same thing once it is ready.

**Testing:**
* **Disable Paddy 1:** Make sure 'Paddy' isn't enabled
* **Disable Anima Toolkit:** Make sure 'Anima Toolkit' is not enabled; right now for some reason, they don't seem to play nice together — in some cases :/
* **Restart sketch:** this is very important. Every time you re-enable 'Paddy 2', if it's not working, try restarting Sketch.

🙌 **Bugs:** Please report any issues that you find. Keep in mind, not everything has been implemented yet; see the 'Todo list' below. So only report on stuff not working if it has a 'tick' already against it.

💡 **Feature requests:** Got any other ideas you want to be on Paddy's roadmap; please submit them as an 'Issue', and I'll add them to this list.



## Key differences

[Check out the video overview:](https://www.youtube.com/watch?v=cTXpWeiH17s)

[![Paddy 2 beta Preview 1 video](https://img.youtube.com/vi/cTXpWeiH17s/0.jpg)](https://www.youtube.com/watch?v=cTXpWeiH17s)


Compared to 'Paddy 1' there are a few key differences that have been built so far:

* Setting the properties via the layer name is optional – you can now set them via the inspector panel too.
* A lot faster. In my couple of tests I benchmarked; this came out at being around 30x faster; and in some cases as much as 200x faster!!
* This approach will allow for 'Nested symbols'. Although, it's not currently enabled in the beta, it is something I think I've managed to crack



## When will is come out of beta?

Once I can pretty much get feature parity with Paddy 1, and I know what I have implemented is stable, I will release it. With the plan of fast follow-on release for features like nested symbols.

I will not aim to get everything in the following Todo list complete before shipping; some are stretch goals.


## Todo list

### Automatic re-layout

- [x] Re-layout ancestors after moving a layer
- [x] Re-layout ancestors and children after re-sizing a group
- [x] Re-layout ancestors after changing Text layer value
- [x] Re-layout layers after changing symbol overrides
- [x] Don't re-layout after selection changes from 'un-doing' (e.g. CMD + Z)
- [x] Re-layout after deselecting everything; as a 'catch-all' if it hasn't already been layed out
- [ ] Make sure 'Moving' a layer works with AnimaToolkit installed
- [x] Update after a 'un-grouping' a group
- [x] Make sure using keyboard shortcut to move a layer in the layer list (e.g to back) works. At the moment, it thinks the layer was deleted
- [ ] Have some better logic for how a group should re-position after; inserting layer, resizing layer, moving layer etc.
- [x] Make sure 'selection changed' works for Sketch 49 and Sketch 50

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
- [x] Re-layout after deleting layers in Sketch v50 (seems to work in previous versions)
- [x] Re-layout after pasting a new layer into a Stack group
- [x] Pixel fit the spacing – based on the user's preferences
- [ ] STRETCH: Allow multiple spacing values – e.g. (10 20) would alternate spacing 10 and 20 pixels
- [x] STRETCH: After resizing a Stack group, resize the children to respect the new size, and the spacing. This is a really tricky one! But would be a huge time saver!!!
- [ ] After resizing a group to infer new size, make sure that it does not infer a new size on Symbol Instances
- [ ] Allow an option for 'stretching' – see https://github.com/DWilliames/paddy2-beta/issues/5
- [ ] Read 'stretching' properties from the layer list names
- [ ] Allow an Artboard to be a Stack Group
#### User interface
- [x] Show a view in the inspector when eligible to create a stack group
- [x] Show UI in the inspector to manipulate the stack vie properties
- [x] Show option to 'remove' the stack group from within the inspector
- [x] Change the icon of the 'Stack group' in the layer list to make it stand out
- [x] Update the icon to have the alignment directions etc. darker rather than white
- [x] Update the 'Stack group' icon, to something better
- [x] Re-layout the layers after changing the spacing/orientation from within the inspector UI
- [ ] Better placement within the inspector?
- [ ] Show a custom icon for vertical/horizontal stretching

---

### Alignment

- [x] Read properties from layer name
- [x] Save alignment properties to layer data – so it doesn't *have* to be read from the layer name
- [x] Allow multiple alignment values
- [x] Pixel fit the alignment – based on the user's preferences
- [x] If there's a 'locked' layer, use it as an anchor point for laying out / aligning the layers
- [x] If there's not a 'locked' layer Anchor the laying out based on the selected layer – unless CMD or ALT are held down
#### User interface
- [x] Show an 'Alignments' view within the inspector for all groups
- [x] Allow only one vertical alignment, and one horizontal alignment from within the UI
- [x] Re-layout the layers as soon as the alignment value is changed from the Inspector
- [x] Custom icon for each 'alignment group' within the layer list
- [x] Handle setting Alignment to more than one group at once
- [x] Hide vertical/horizontal alignment, based on if the group is stacked; and which direction it is stacked
- [ ] Better placement within the inspector?

---

### Padding

- [x] Read padding from layer name
- [x] Save padding to layer data – so it doesn't *have* to be read from the layer name
- [x] Shape layers as 'background' layer
- [x] Ignore layers beginning with '-'
- [x] Allow multiple layers to have padding
- [x] Symbol instances as 'background' layer
- [x] STRETCH: Adjust sibling layers to match the correct size after resizing the padding layer directly!! (This is a big one! Tricky to do; but a real new timesaver.)
- [x] Re-layout layer after inserting a layer
- [ ] Allow undefined padding for specific edges – e.g. 'x'
- [ ] Allow a 'group' to have padding – so that it can be used for a detached symbol instance that has padding
#### User interface
- [x] Show padding values within the inspector
- [x] Show a custom icon for a 'background' layer with padding within the layer list
- [x] Re-layout the layers after changing the padding properties from within the Inspector
- [x] Add a button to 'add' padding to a layer from within the inspector
- [x] Infer the padding properties when 'adding' padding – at the moment, will work after 'CMD/ALT' clicking '+' to add padding
- [x] Having a button to remove Padding
- [x] Have a toggle to turn padding on/off
- [x] Toggle the number of input fields; from 4 to 2 to 1. (By clicking on the input field labels, like on the colour picker RGB/HSV)
- [ ] Have a hover effect to highlight the input fields; to indicate clicking on them may do something
- [ ] Better placement within the inspector?
- [x] Infer current padding when CMD/ALT + clicking the '+' to add Padding

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
- [ ] Add an option to ignore – autosizing symbol instances (that have padding within their master)
#### User interface
- [x] Show 'ignore layer' in the Inspector
- [x] Set the 'ignore layer' value on the selected layers when changing in the inspector
- [ ] Show an extra checkbox to not auto-update symbol instances
- [ ] Add a custom icon if the layer should be ignored

---

### User settings

- [ ] Turn auto-updating on/off
- [ ] Show/hide the views in the inspector
- [ ] Turn 'nested symbol' support on/off
- [ ] Feedback / submit bug button
- [ ] Button to donate via PayPal
- [x] Option to show custom icons in layer list or not
- [ ] Option to always include the properties in the layer name / or not
- [ ] Default padding – to be used when the padding is not inferred
- [ ] Add option to re-organise layer list based on layers within stack group

---

### Installing / Updating

- [x] Alert to restart Sketch after installing a new version of the plugin
- [ ] Alert to possibly turn off AnimaToolkit?
- [ ] Custom icon for the alerts
- [x] After asking to restart Sketch – re-open the same documents again

---

### Symbols

TODO: Update the todo list here

- [ ] After detaching group, re-layout the detached group
- [ ] Fix 'trailing' layers, after detaching from symbol
- [ ] Check if a symbol has Padding within it
- [ ] Check if a symbol has Stack groups within it
- [ ] Figure out when a layer in a Symbol master has changed, and all of its instances may need resizing
- [ ] Allow an instance to not be auto-resized even though its Master may have padding
- [ ] Update all instance sizing, and re-layout its ancestors after the Symbol Master updates
- [ ] Only update the instances once the user has deselected everything
- [ ] Include the 'background' colour of the symbol after 'detaching'
- [ ] Make sure it works with local Libraries
- [ ] Make sure it works with remote Libraries
- [ ] Cache auto-resize for symbol instances with the same overrides
- [ ] After changing properties within a symbol; remove the size cache, and resize all instance
- [ ] After changing properties within a symbol; remove the size cache for any symbol master an instance of it may appear in
- [ ] Handle detaching symbols, that have a symbol instance with padding applied to it (perhaps allow Groups to have padding?)
- [ ] Update all instances after 'update from library' command is run

---

### Nested symbols

TODO: Update the todo list here – a lot to do

- [ ] Only override the visual look of a symbol instance, if the master has Stack Groups within it

---

### Migration

- [ ] Command to convert 'Anima Stack groups' to 'Paddy' stack groups
- [ ] Command to detach all symbols recursively for exporting to Zeplin etc. – possibly; this may not be necessary

---

### Other

- [ ] Documentation for everything!
- [ ] A demo video of the key changes
- [ ] Create a 'Paddy' logo/icon
