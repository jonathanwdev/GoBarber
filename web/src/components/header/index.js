import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/headerLogo.svg';
import { Container, Profile, Content } from './styles';

export default function header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>My Name</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="profile"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
