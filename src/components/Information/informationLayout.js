import '../App.css';
import PropTypes from 'prop-types';
export function InformationLayout({msg}) {
    return (
        <div className="message">
            {msg}
        </div>
    )

};

InformationLayout.propTypes = {
    msg:    PropTypes.string
}