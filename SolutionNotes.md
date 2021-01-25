# Solution Notes

The first thing I did was to split down the html into components. Initially I had an item component, but given the scope of the task I decided to jsut render them directly in OrderItems. (One benefit of this could be if there was only one item, you would render it with 'col is-12' rather than 'col is-6', a downside would be its not reusable and makes the testing of the elements a bit to broad, if i was doing this for production I would of broken it down further). \\
I then created the model objects that would contain all the business logic, grouping of order items ect. \\
Tests were then added after (run with the npm test command) looking at the structure of the object returned from the api endpoint. Tests were also added for logic contained in the rendered elements (see OrderHeaderDetails.test.js). \\

There are no doubt some bugs in the code, I noticed that the price for the second order vanilla item was incorrect. This is no doubt an error in the Order Model and a test could be written to check, however I have not done this as I have beent trying to stick to the time frame for the task.

## Further Work
* Refactor combining orders to use variant and not be specific to powders (like it said in the description but In my excitment I may of forgotten this...)
* Further testing on rendering logic for Order item name
* Further testing all rendered elements, using snapshots to check rendering
* Fixing that price error.
