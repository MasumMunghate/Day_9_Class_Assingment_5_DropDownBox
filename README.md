# Day_9_Class_Home_Work Add Text

The code starts by getting references to specific elements on a webpage using getElementById. These elements are the input field with an id "text_of_para", the button with an id "Add_Notes", and the area where the notes will be displayed with an id "Paragraph_Output".

The Add_Notes button has an event listener attached to it. When the button is clicked, the function inside the event listener is executed.

Inside the event listener function, it takes the value entered in the input field (text_of_para) and stores it in the variable text.

The console.log(text) line simply prints the value of text to the browser's console. This helps you see what value you've entered.

It creates a new paragraph element (<p>) using document.createElement("p").

The content of the new paragraph is set to the value of text using the .innerHTML property.

A blue line at the bottom of the paragraph is added using the .style property.

The new paragraph is added to the output area (Paragraph_Output) using appendChild.

The input field's value is cleared so that you can easily enter new text for the next note.

A click event listener is attached to the new paragraph. When the paragraph is clicked, the function inside this event listener removes the clicked paragraph from the output area.
