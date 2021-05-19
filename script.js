const container = document.querySelector('.container');
const heading = document.querySelector('.heading');

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
    const data = await response.json();
    // console.log(data[0]);

    // <div class="posts">
    //         <p class="post-1d">1</p>
    //         <h2 class="title">My favourite sports</h2>
    //         <p class="post-info">
    //             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum hic quia, in consectetur iste sit enim officiis delectus! Quae quisquam ipsum doloremque ducimus voluptatum sunt aut aspernatur optio non, facilis ipsa nesciunt fuga quidem nemo asperiores error labore. Deserunt id velit ea! At consectetur obcaecati asperiores tempora minus. Tempora iusto hic ullam nostrum odit qui ipsa amet natus soluta, eaque, eligendi at architecto adipisci, iste ea saepe eius dignissimos cumque quia earum tempore voluptas? Perferendis totam quis soluta nostrum laudantium. Ipsa eveniet voluptate deserunt, neque ducimus expedita tempore facere nesciunt provident distinctio tenetur aliquam, ex praesentium, tempora magnam explicabo ipsam.
    //         </p>
    //     </div>

    data.map( (curElement, index) => {
        const htmlData = `
        <div class="posts">
        <p class="post-id">${postCount++}</p>
        <h2 class="title">${curElement.title}</h2>
        <p class="post-info">${curElement.body}</p>
        </div>

        `;
        container.insertAdjacentHTML('beforeend', htmlData);

    } )
};

getPost(); 

        // Infinite Scroll
const showData = () => {
    setTimeout( ()=>{
        pageCount++;
        getPost(); 
    } ,300)

};

window.addEventListener('scroll', ()=> {
    // const scrollHeight = document.documentElement.scrollHeight;
    // const scrollTop = document.documentElement.scrollTop;
    // const clientHeight = document.documentElement.clientHeight;

    // by Help of destructuring -> 3line of code in one line
    const{scrollHeight, scrollTop, clientHeight} = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight){
        console.log("i am at bottom");
        showData();
    }
} )