// book 2 chap 9 Objects
// Practice and Challenge

const Elizabeth = {
    district: "5th"
} 
function changeElizabethDistrict (districtName){
    Elizabeth.district = districtName
}
changeElizabethDistrict ("4th")
console.log(Elizabeth.district)

let platformStatements = {
    taxes: "",
    jobs: "",
    infrastructure: "",
    healthcare: "",
    crime: ""
}
// these are my functions to change the platform object

function changePlatformStatementTaxes (taxes){
    platformStatements.taxes = taxes
}
changePlatformStatementTaxes ("we need lower taxes")
console.log(platformStatements.taxes)

function changePlatformStatementJobs (jobs){
    platformStatements.jobs = jobs
}
changePlatformStatementJobs ("we need better jobs")
console.log(platformStatements.jobs)

function changePlatformInfrastructure (infrastructure){
    platformStatements.infrastructure = infrastructure
}
changePlatformInfrastructure ("we need better infrastructure")
console.log(platformStatements.infrastructure)

function changeHealthcare (healthcare){
    platformStatements.healthcare = healthcare
}
changeHealthcare ("we need more affordable healthcare")
console.log(platformStatements.healthcare)

function changeCrime (crime){
    platformStatements.crime = crime
}
changeCrime ("we need lower crime rates")
console.log(platformStatements.crime)


let DonationForm = {
    donationUrl: "",
}

// this is my function to change the donation url object

function changeDonationUrl(url){
    DonationForm.donationUrl = (url)
}
changeDonationUrl ("wwww.thisismyurl.com")
console.log(DonationForm.donationUrl)


let calendar = {
    event1: "",
    event2: "",
    event3: "",
}

// these are my functions to change the calendar object

function changeEvent1(event1){
    calendar.event1 = event1
}
changeEvent1("fundraiser in July")
console.log(calendar.event1)

function changeEvent2(event2){
    calendar.event2 = event2
}
changeEvent2("rally in August")
console.log(calendar.event2)

function changeEvent3(event3){
    calendar.event3 = event3
}
changeEvent3("fundraiser in September")
console.log(calendar.event3)


let volunteerInfo = {
    name: "",
    address: "",
    email: "",
    phone: "",
    availability: "",
    activities: "",
}

// these are my functions for volunteer info

function changeVolName(name){
    volunteerInfo.name = (name)
}
changeVolName("John")
console.log(volunteerInfo.name)

function changeVolAddress(address){
    volunteerInfo.address = (address)
}
changeVolAddress("1000 Pine St")
console.log(volunteerInfo.address)

function changeVolEmail(email){
    volunteerInfo.email = (email)
}
changeVolEmail("john@gmail.com")
console.log(volunteerInfo.email)

function changeVolPhone(phone){
    volunteerInfo.phone = (phone)
}
changeVolPhone("888-566-1000")
console.log(volunteerInfo.phone)

function changeVolAvail(availability){
    volunteerInfo.availability = (availability)
}
changeVolAvail("Fridays")
console.log(volunteerInfo.availability)

function changeVolActivities(activities){
    volunteerInfo.activities = (activities)
}
changeVolActivities("door to door")
console.log(volunteerInfo.activities)

let biography = {
    personal: "",
    career: "",
}
// these are my functions for biography info

function changePersonal(personal){
    biography.personal = (personal)
}
changePersonal("Elizabeth was born in Nashville")
console.log(biography.personal)

function changeCareer(career){
    biography.career = (career)
}
changeCareer("Elizabeth has 20 years of policy experience")
console.log(biography.career)

// need to finish my functions for the rest

let imageGallery = {
    headShot: "",
    pictureOfFamily: "",
    pictureOfConstituents: "",
}

let missionStatement = {
    line1: "",
    line2: "",
    line2: "",
}

let registerToVote = {
    voteUrl: "", 
}

// may want to create an array for volunteers and events so you can have many different items for each.

// function for chaning image gallery
// changeImageGallery(elizabethSanger, "headshot", "newImage")

// const changeImageGallery=  (politiicianObject, properyToChange, nestedProperyToChange, newValue) 

// const logActivities = (politicianObject, propertyToChange, volunteerProperty) => {
//     const volunteers = elizabethSanger[propertyToChange]
// ]

// for(let i = 0; i<volunteers.length; i++) {
//     console.log(volunteers[i].activities);
// }
// logActivities(elizabethSanger, "volunteers, "activities", "riding bikes")
console.log(elizabethSanger.volunteers);


let lizArticle = document.createElement("article")
lizArticle.setAttribute("id", elizabethSanger.congressionalDistrict)

const divRef = document.queryselector("#content-container")
divRef.appendChild(lizArticle)


// this is how you do the challenge 
let psUlRef = document.createElement("ul")

const platformStatments = elizabethSanger.platformStatements
for(let ps in platformStatements){
    let liRef = document.createElement("li")
    liRef.textContent = `${ps}: ${platformStatements[ps]}`
    psUlRef.appendChild(liRef)
}

lizArticle.appendChild(psUlRef)

// this is how you would loop through an image gallery

let imgSection = document.createElement("section")

const imageGallery = elizabethSanger.imageGallery
for(let image in imageGallery){
    let imgRef = document.createElement("img")
    imgRef.setAttribute("src", imageGallery[image])
    imgSection.appendChild(imgRef)
}

// lizArticle.appendChild() what goes in the parenthesis-look over this

