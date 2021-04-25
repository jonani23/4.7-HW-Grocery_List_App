////////////// Part 1 /////////////////////
/* 1.1) Link the CSS file by setting the href attribute of <link> */

let css = document.querySelector('link');
css.setAttribute('href', 'styles.css');


/* 1.2) Set the class of the image to "list-img" */

let image = document.querySelector('img');
image.setAttribute('class','list-img');


/* 1.3) Set the classes of the inputs (buttons) to "btn" by using a loop */

const buttons = document.querySelectorAll('input');
for(let button of buttons){
        button.setAttribute('class','btn')
}


////////////// Part 2 /////////////////////

/* 2.1) grab the <ul> that we are going to append <li> nodes to and store it in a variable */

let groceryList = document.getElementById('grocery-list');



/* 2.2) When the user clicks the ADD button, ask them what item they need to add and then:
        1. Create a new li Element
        2. Create the text node with the user's input
        3. Append the text node to the li Element
        4. Add the li Element to the unordered list by appending it to the variable created in step 2.1 */

let addItem = () => {
        let newItem = prompt("What item would you like to add?");
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(newItem));
        groceryList.appendChild(item);
};      
     

               
/* 2.3) When the user clicks the TOTAL button:
        1. Display the total area by removing the "display-none" class from the the total-area div
        2. Total the number of groceries by getting the length of the li NodeList
        3. Add the count to the page by setting the textContent of #item-count */

let getTotal = () => {

         //1. to remove 'display-none' we select the div class 
         let children = document.querySelector('.main-content').lastElementChild;
         let listTotal = children.previousElementSibling;
         listTotal.classList.remove('display-none');

        //2. select nodelist of 'li' and use .length to get total
        let listArray =groceryList.children;
        let number = listArray.length;

        //3. using .querryselector set textcontent to number
        let span = document.querySelector('#item-count');
        span.textContent = number;
                       
}


////////////// BONUS /////////////////////
/*  When the user clicks the REMOVE button, ask them what item they want to remove and then:
    1. Remove the item from the list with removeChild by comparing the user's response to the textContent of each <li> */
    
const removeItem = () =>{
        let total = groceryList.children;
        let removeItem = prompt(`What item should we take out?`);
        for(let each of total){
                if(each.textContent === removeItem){
                        list.removeChild(each);
                }
        }


}
