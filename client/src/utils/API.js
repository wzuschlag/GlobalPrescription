import axios from "axios";


const BASEURL = "https://api.fda.gov/drug/label.json"


export default {

  // Gets all drugs
  addUser: function(userData){
    console.log("route hit");
    console.log(userData);
    return axios.post("/api/drugs/landing", userData);
  },
  findUser: function (userData) {
    console.log("this login button is working")
    return axios.get("/api/drugs/loginn", {params: userData});
  },
  displayUser: function (userData) {
    console.log("this display function is working")
    return axios.get("/api/drugs/logged", { params: userData });
  },
  redirect: function (Token) {
    console.log(Token);
    localStorage.setItem("User", Token);
    
    window.location = "/drugs"
  },
  getDrugs: function(data) {
    console.log(data);
    return axios.get("/api/drugs/grabUser/", {
      params : data }
      );
  },

  getDbDrugs : function() {
    return axios.get("/api/drugs")
  },
  // Gets the drug with the given id
  getDrug: function(id) {
    return axios.get("/api/drugs/" + id);
  },
  // Deletes the drug with the given id
  deleteDrug: function(id) {
    return axios.delete("/api/drugs/grabUser", {
      params : id }

      );
  },
  // Saves a drug to the database
  saveDrug: function(drugData) {
    console.log(drugData);
    return axios.post("/api/drugs", drugData);
  },
  searchDrug: function(query){
    console.log("My full query " + BASEURL + query); 
    return axios.get(BASEURL + query);
  }, 
  testUpdate : function(drug) {
    console.log(drug);
    return axios.put("/api/drugs/search/", drug)
  }

};