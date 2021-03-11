import React from 'react';

import '../../../../dist/NavLogo/NavLogo.png';

const NavBar = () => {

    return <div className="NavBar Header">
        <div className="logoContainer" >
            {/* <img src="../../../styles/NavLogo/NavLogo.png"/> */}
            <img src="require('../../../../dist/NavLogo/NavLogo.png').default" />
            {/* <img src="https://drive.google.com/file/d/1AbLlMaApamW2I5hUXKhDlvB7q4j1uoLU/view?usp=sharing"/> */}
        </div>
    </div>

}

export default NavBar;
