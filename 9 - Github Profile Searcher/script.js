
// all selectores
const user_img = document.querySelector(".user-img");
const userName = document.querySelector(".user-name h2");
const user_Name = document.querySelector(".user-name h3");
const followers = document.querySelector(".followers span");
const followd = document.querySelector(".followed span");
const repo_details = document.querySelector(".repo-details");
const searchBtn = document.querySelector(".btn");
const visitBtn = document.querySelector(".user-visit .visit-profile");

var user_name = '';

// when ser writer user name in the text box
function inputFunction() {
    // trim method will replace before and after white space of given value
    let input_user = document.querySelector(".input-user").value.trim();

    if (input_user.length <= 0) {
        alert("Please enter github user name");
        document.querySelector(".input-user").value = "";
        document.querySelector(".input-user").focus();
        return false;
    } else {
        user_name = input_user.split("").join("");
        // if everything is ok run fetch user function

        // this function is not made yet
        fetchUser();

        // clear the iput box and focused is for next
        document.querySelector(".input-user").value = "";
        // document.querySelector(".input_user").focus();
    }
};


searchBtn.addEventListener("click", function () {
    inputFunction();
});


// if user press enter it should be submit
document.querySelector(".input-user").
    addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            // alert("You press a enter button");
            inputFunction();
        }
    });


// fetching user from github api
function fetchUser() {

    fetch(`https://api.github.com/users/${user_name}`)
        .then(response => response.json())
        .then(function (data) {
            // console.log(data);
            if (data.message === "Not Found") {
                alert("User not found, Please enter correct user name");
                return false;
            } else {
                user_img.innerHTML = `<img src="${data.avatar_url}">`;
                userName.innerHTML = data.name;
                user_Name.innerHTML = data.login;
                followers.innerHTML = data.followers;
                followd.innerHTML = data.following;


                const link = data.html_url;

                visitBtn.setAttribute("href", link);

            }
        });

        

    // fetching repo
    fetch(`https://api.github.com/users/${user_name}/repos`)
        .then(response => response.json())
        .then(function (repo_data) {
            // console.log(repo_data);

                   

            // if user type randome name which is user but not have repository
            
            if (repo_data <= 0) {
                repo_details.innerHTML = `

                    <div class="item">
                        <div class="repo_name">No Repo Found</div>
                    </div>
                    
                    `
            } else {
                // when you type randome user name if user have repos

                if (repo_data.message === "Not Found") {
                    repo_details.innerHTML = `

                    <div class="item">
                    <div class="repo-name">devAmit</div>
                    <div class="repo-details">
                        <div class="info-star">
                            <i class="bx bxs-star"></i>
                        </div>
                        <div class="info-fork">
                            <p> <i class="bx bx-git-repo-forked"></i>0</p>
                        </div>
                        <div class="info-size">
                            <p> <i class="bx bx-file"></i>0kb </p>
                        </div>
                    </div>
                </div>
                    
                    `
                } else{
                    let repo_Data = repo_data.map(item => {

                        return (
                            repo_details.innerHTML = `

                            <div class="item">
                            <div class="repo-name">${item.name}</div>
                            <div class="repo-details">
                                <div class="info-star">
                                    <i class="bx bxs-star">
                                    ${item.watchers}
                                    </i>
                                </div>
                                <div class="info-fork">
                                    <p> <i class="bx bx-git-repo-forked"></i>
                                        ${item.forks}
                                    </p>
                                </div>
                                <div class="info-size">
                                    <p> <i class="bx bx-file"></i>
                                        ${item.size}kb
                                    </p>
                                </div>
                            </div>
                        </div>

                            `
                        );
                    })
                    

                    // here i am taking only 6 repository
                    // you can takes more than 6 repository
                    repo_details.innerHTML = repo_Data.slice().join("");

                   
                }
      
            }
        });
}
