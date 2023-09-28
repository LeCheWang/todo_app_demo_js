let container = document.getElementById("container")
let ip_job = document.getElementById("ip_job")
let ul_job = document.getElementById("ul_job")

let jobs = JSON.parse(localStorage.getItem("jobs"))
function renderJob(){
    for (let job of jobs){
        let li = document.createElement("li")
        let ID = job.id;
        li.id = ID;
        li.innerHTML = `
            <div>
                <span class="line">${job.title}</span> 
                <i onclick="removeJob(${ID})" class="fa-solid fa-xmark" style="color: #ff0000;"></i>
            </div>
        `
        ul_job.appendChild(li)
    }
}
renderJob();

function add(){
    let job = ip_job.value
    let li = document.createElement("li")
    let ID = Date.now()
    li.id = ID;
    li.innerHTML = `
        <div>
            <span>${job}</span> 
            <i onclick="removeJob(${ID})" class="fa-solid fa-xmark" style="color: #ff0000;"></i>
        </div>
    `

    ul_job.appendChild(li)
    ip_job.value = ''
    ip_job.focus(); 

    jobs.push({
        id: ID, 
        title: job,
        status: 1
    })

    localStorage.setItem("jobs", JSON.stringify(jobs));
}   

ip_job.addEventListener('keypress', (event)=>{
    if (event.key === 'Enter'){
        add()
    }
})

function removeJob(id_li){
    let nodeRemove = document.getElementById(id_li)
    ul_job.removeChild(nodeRemove)
    const index = jobs.findIndex((v)=> v.id === id_li)
    jobs.splice(index, 1);
    localStorage.setItem("jobs", JSON.stringify(jobs))
}