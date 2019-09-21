var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    patients: [],
    formPatient:{
       patientGuid:'',
      firstName: '',
        lastName:'',
        sexAtBirth:'',
        priority:'',

    }
  },
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => { patientRecordApp.patients = json })
    },
    handleCreateRecord(event){
// fetch(url, {method='post',data:this.formPatient})
this,formPatient.push(this.formPatient);
this.formPatient={
  patientGuid:'',
 firstName: '',
   lastName:'',
   sexAtBirth:'',
   priority:'',

}
    }
  },
  created() {
    this.fetchPatients();
  }
});
