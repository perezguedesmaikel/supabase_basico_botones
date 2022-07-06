
import './App.css';
import React from "react";
import Layout from "./components/layout";
import {supabase} from "./supabase/credencial";

function Home() {
    async function prueba() {
        try{
            const {user, error} = await supabase.auth.signUp({
                email: 'yuniel33@gmail.com',
                password: 'Blue@820303',
            })
            if (error) throw error;
            alert('Chequea el correo para confirmar tu login');
        } catch (e) {
         alert(e.message);
        }


    }
    async function login() {
        try {
            const {user, error} = await supabase.auth.signIn({
                email: 'perezguedesmaikel@gmail.com',
                password: 'Blue@820303',
            })
            error&&console.log(error);
            console.log('todobien',user);
        } catch (e) {
            alert(e.message);
        }

    }
    async function signout() {
        try{
            const { error } = await supabase.auth.signOut();
            console.log('Ha cerrado cesión');
            error && console.log(error);

        }catch (e) {
            console.log(e.message);
        }

    }
  return (
    <div className="App">

        <Layout>
          <h1>hola!!!</h1>
            <p>Estos tres botones representan un ejemplo sensillo de como me pudi autentificar en supabase, ojo
            lo demas es manejo de este usuario osea ya con esto se puede probar</p>
            <button onClick={prueba}>registrar</button>
            <button onClick={signout}>signout</button>
            <button onClick={login}>login</button>

        </Layout>
    </div>
  );
}

export default Home;
