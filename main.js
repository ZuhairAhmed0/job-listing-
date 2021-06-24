const div = document.querySelector('.contianor');
fetch('data.json').then(res => res.json()).then(data => {
    for (let item of data) {
        let test = "",
            tool = "";
        item.languages.forEach(x => test += `<li>${x}</li>`);
        item.tools.forEach(x => test += `<li> ${x} </li>`);

        div.insertAdjacentHTML("beforeend",
            `<article>
                <section>
                    <div class="logo">
                        <img src="${item.logo}" alt="" />
                    </div>
                    <div class="info">
                    <ul>    
                        <li>${item.company}</li>
                        ${
                            item.new == true ? `<li>news</li>` : ''
                        }
                        ${
                            item.featured == true ? `<li>featured</li>` : ''
                        }
                    </ul>
                    <ul>
                        <li>
                            <strong>${item.position}</strong>
                        </li>
                    </ul>
                    <ul>
                        <li>${item.postedAt}</li>
                        <li>${item.contract}</li>
                        <li>${item.location}</li>
                    </ul>
                </div>
            </section>
            <section class="skills">
                <ul>
                    <li>${item.role}</li>
                    <li>${item.level}</li>
                    ${test}
                    ${tool}
                </ul>
            </section>
        </article>
        `
        )
    }
});
const plac = [
    "company",
    "new",
    "featured",
    "postedAt",
    "contract",
    "location",
    "position",
    "role",
    "level",
    "languages",
    "tools"];
const newJob = document.querySelector('.job button');
const input = document.querySelectorAll('.newJob input');
input.forEach((e, i) => {
    e.placeholder = plac[i];
})
newJob.addEventListener('click', function(e) {
    e.preventDefault();
    if(input[0].value != '' && input[6].value != '' && input[9].value != '' ) {
        let test = '', tool = '';
        input[9].value.split(' ').forEach(x => test += `<li>${x}</li>`);
        input[10].value.split(' ').forEach(x => test += `<li> ${x} </li>`)
        div.insertAdjacentHTML("beforeend",
        `<article>
            <section>
                <div class="logo">
                    <img src="" alt="" />
                </div>
                <div class="info">
                    <ul>    
                        <li>${input[0].value}</li>
                        ${
                            Boolean(input[1].value) == true ? `<li>news</li>` : ''
                        }
                        ${
                            Boolean(input[2].value) == true ? `<li>featured</li>` : ''
                        }
                    </ul>
                    <ul>
                        <li>
                            <strong>${input[3].value}</strong>
                        </li>
                    </ul>
                    <ul>
                        <li>${input[4].value}</li>
                        <li>${input[5].value}</li>
                        <li>${input[6].value}</li>
                    </ul>
                </div>
            </section>
            <section class="skills">
                <ul>
                    <li>${input[7].value}</li>
                    <li>${input[8].value}</li>
                    ${test}
                    ${tool}
                </ul>
            </section>
        </article>
        `
        )
        input.forEach(i => i.value = '')
    }
});
