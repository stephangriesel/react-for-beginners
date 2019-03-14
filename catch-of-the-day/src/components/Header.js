import React from 'react';

// Functional component:

const Header = props => (
    <header className="top">
        <h1>Catch
                <span className="ofThe">
                <span className="of">Of</span>
                <span className="The">The</span>
            </span>
            Day</h1>
        <h3 className="tagline">
            <span>{props.tagline}</span> {/* Functional Components does not use "this", get one argument props passed in via header */}
        </h3>
    </header>
)

// Class based component:

// class Header extends React.Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1>Catch 
//                 <span className="ofThe">
//                     <span className="of">Of</span> 
//                     <span className="The">The</span>
//                 </span> 
//                 Day</h1>
//                 <h3 className="tagline">
//                 <span>{this.props.tagline}</span>
//             </h3>
//             </header>

//         )
//     }
// }

export default Header;