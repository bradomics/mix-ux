import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'react-feather';
import './Accordion/Accordion.css'


export default function Accordion({ title, accordionItems, loading, className }) {
    const handleAccordionClick = (accordionSectionIndex) => {
        document.querySelectorAll('.accordion-section')[accordionSectionIndex].classList.remove('collapsed')
        document.querySelectorAll('.accordion-content')[accordionSectionIndex].classList.remove('accordion-content-hidden')
    }
    return (
        <div className={`${className}`}>
            {
                accordionItems.map((accordionSection, accordionSectionIndex) => {
                    return(
                        <div className="accordion-section collapsed" onClick={() => handleAccordionClick(accordionSectionIndex)}>
                        <div className="accordion-title">
                            {accordionSection.title}<Plus/>
                        </div>
                        <div className="accordion-content accordion-content-hidden">
                            {accordionSection.content}
                            Here is some sweet accordion content.
                        </div>
                    </div>)
                })
            }
        </div>
    );
}

Accordion.propTypes = {
  title: PropTypes.string,
  accordionItems: PropTypes.array,
  loading: PropTypes.bool,
  active: PropTypes.bool
}

Accordion.defaultProps = {
  title: 'Card Title',
  accordionItems: [
      {
          title: 'Woop',
          content: 'DoubleWoop'
      },
      {
        title: 'Woop2',
        content: 'WeepWoop'
    },
  ],
  loading: false,
  active: false
}