import { useState } from 'react'
import { supabase } from '../../supabase'
import { useNavigate } from "react-router-dom";
import './style.css'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()
    const { data: { user }, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      alert("Usuario o contraseña no válido")
      return
    }
    if (user) {
      const { data: profile, error: profileError } = await supabase
        .from('usuario')
        .select('roll')
        .eq('id', user.id)
        .single()
      if (profileError) {
        alert('Error al obtener el perfil')
        return
      }
      if (profile.roll === 'admin') {
        navigate('/administrador')
      } else {
        navigate('/')
      }
    }
  }

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      <h2>¿No tienes cuenta?</h2>
      <button className="secondary-button" onClick={() => navigate(`/registro`)}>Regístrate</button>
    </div>
  )
}

export default Login
