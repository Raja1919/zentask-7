let form=document.querySelector("#form")


form.addEventListener('submit',(e)=>{
    e.preventDefault()
   
    let firstname=document.querySelector('#first-name')
    let lastname=document.querySelector('#last-name')
    let address=document.querySelector('#address')
    let pincode=document.querySelector('#pincode')
    let gender= document.querySelectorAll('input[type="radio"]');
    let food=document.querySelector("#food")
    let state=document.querySelector('#state')
    let country=document.querySelector('#country')

    
let tr_data=document.createElement('tr')

let firstname_td=document.createElement('td') 
firstname_td.innerText=firstname.value
tr_data.append(firstname_td)

let lastname_td=document.createElement('td') 
lastname_td.innerText=lastname.value
tr_data.append(lastname_td)

let address_td=document.createElement('td') 
address_td.innerText=address.value
tr_data.append(address_td)

let pincode_td=document.createElement('td') 
 pincode_td.innerText=pincode.value
 tr_data.append(pincode_td)

let gender_td=document.createElement('td')
for (const i of gender) {
  if (i.checked) {
    gender_td = i.value;
    break;
  }
}
tr_data.append(gender_td)

let food_td=document.createElement('td')
food_td.innerText=food.value
tr_data.append(food_td)

let state_td=document.createElement('td')
state_td.innerText=state.value
tr_data.append(state_td)

let country_td=document.createElement('td')
country_td.innerText=country.value
tr_data.append(country_td)

let body_data=document.querySelector('tbody') 
body_data.append(tr_data )

form.reset()
})



