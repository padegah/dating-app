users = [
    {
        name: "Lucy",
        gender: "F",
        hobby: "pets",
        avatar: "lucy.JPG",
        age: 20,
        location: "Accra"
    },
    {
        name: "Betty",
        gender: "F",
        hobby: "pets",
        avatar: "betty.JPG",
        age: 27,
        location: "Accra"
    },
    {
        name: "Ronald",
        gender: "M",
        hobby: "music",
        avatar: "ronald.JPG",
        age: 29,
        location: "Kumasi"
    },
    {
        name: "Christopher",
        gender: "M",
        hobby: "sports",
        avatar: "chris.JPG",
        age: 34,
        location: "Kumasi"
    },
    {
        name: "Paul",
        gender: "M",
        hobby: "shopping",
        avatar: "paul.JPG",
        age: 41,
        location: "Takoradi"
    },
    {
        name: "Charlie",
        gender: "M",
        hobby: "pets",
        avatar: "charlie.JPG",
        age: 39,
        location: "Takoradi"
    },
    {
        name: "Ximena",
        gender: "F",
        hobby: "reading",
        avatar: "ximena.JPG",
        age: 57,
        location: "Kumasi"
    },
]

window.addEventListener("load", function() {

    var results = document.getElementById("results");

    function search() {
        // get hobby
        let hobbyField = document.getElementById("hobby");
        let hobby = hobbyField.value;
        // console.log(hobby);

        // get gender
        let genderField = document.getElementById("gender");
        let gend = genderField.selectedIndex;
        let gender = genderField.options[gend].value;

        // get location
        let locationField = document.getElementById("location");
        let loc = locationField.selectedIndex;
        let location = locationField.options[loc].value;
        
        // get age range
        let minAge = document.getElementById("min-age");
        let maxAge = document.getElementById("max-age");

        let min = minAge.value;
        let max = maxAge.value;
        // console.log(minAge.value, maxAge.value);

        // console.log(location);

        let resultsHTML = '';
        var size = users.length;

        for (let i=0; i<size; i++) {
            if (gender === 'A' || gender === users[i].gender) {
                if (location === 'AL' || location === users[i].location) {
                    if (hobby === '' || hobby === users[i].hobby) {
                        if (min === '' || max === '' || (min <= users[i].age && max >= users[i].age)){
                            resultsHTML += '<div class="person-row">\
                            <img src="images/' + users[i].avatar + '" />\
                            <div class="person-info">\
                            <div>' + users[i].name + '</div>\
                            <div>' + users[i].hobby + '</div>\
                            <div>' + users[i].age + '</div>\
                            <div>' + users[i].location + '</div></div>\
                            <button>Connect</button></div>';
                        }
                    }
                }
            }
        }

        results.innerHTML = resultsHTML;
    }

    var searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", search);
});