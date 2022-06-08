
const sanityClient = require("@sanity/client")
        const client = sanityClient({
        projectId: '6hgz95se',
        dataset: 'production',
        apiVersion: '2021-10-21', // use current UTC date - see "specifying API version"!
        // token: 'sanity-auth-token', // or leave blank for unauthenticated usage
        useCdn: true, // `false` if you want to ensure fresh data
        })

        const query = '*[_type == "reading" ]{passage1{whatWillBeRead[]{asset->{url}}}}'
        // const params = {minSeats: 2}

        client.fetch(query)
        .then((res) => {
                const imageURL = res[0].passage1.whatWillBeRead;
                const URL = imageURL.map((pic) => {
                        return pic.asset.url
                })
                return URL
        })
        .then((URL) => {
                const question = document.querySelector('.yeah');
                URL.forEach((url) => {
                        const Image = document.createElement('img');
                        Image.src = url
                        question.appendChild(Image);
                })
                
        })


const startingminutes = 65;
let time = startingminutes * 60;


const clock = document.getElementById('clock');
const countdown = document.getElementById('countdown_minutes');
const counts = document.getElementById('countdown_seconds');

//Time countdown
setInterval(updateCountdown_minutes, 1000)

function updateCountdown_minutes() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        

        seconds = seconds < 10 ? `0` + seconds : seconds;

        countdown.innerHTML = `${minutes}`;
        counts.innerHTML = `${seconds}`;
        time--;

        if(minutes === 64){
        clock.style.background = "#80ff80"
        }else if(minutes === 50) {
        clock.style.background = "#bfff80"
        }else if(minutes === 40) {
        clock.style.background = "#dfff80"
        }else if(minutes === 30) {
        clock.style.background = "#ffff80"
        }else if(minutes === 20) {
        clock.style.background = "#ffdf80"
        }else if(minutes === 10) {
        clock.style.background = "#ff4000"
        }else if(minutes === 5) {
        clock.style.background = "#ff0000"
        }
        
        //Trying to write a better redirect page code:)
        if(minutes==0 && seconds==0){
        window.location = "../../instruction pages/after reading/writing_instructions.html"
        }

}


const modal      = document.querySelector("#modal");
const openModal  = document.querySelector(".skip");
const closeModal = document.querySelector(".no");

openModal.addEventListener('click', () => {
        modal.showModal();
})
closeModal.addEventListener('click', () => {
        modal.close();
})


