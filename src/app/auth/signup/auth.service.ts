import * as firebase from 'firebase';

export class AuthService{
    token: string;
    signupUser(email: string, psswd: string){
        firebase.auth().createUserWithEmailAndPassword(email, psswd)
        .catch(error => console.log(error));
    }
    signinUser(email: string, psswd :string){
        firebase.auth().signInWithEmailAndPassword(email, psswd)
        .then(response =>{
            firebase.auth().currentUser.getIdToken()
            .then((token:string) => this.token = token)
        })
        .catch(error => console.log(error));
    } 
    getToken(){
         firebase.auth().currentUser.getIdToken()
         .then((token: string)=> this.token = token);
         return this.token;
    }
    isAuthenticated(){
        return this.token != null;
    }
    logout(){
        firebase.auth().signOut();
        this.token = null;
    }
}