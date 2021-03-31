import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'react-feather';
import './Accordion/Accordion.css'


export default function Accordion({ title, accordionItems, loading, className }) {
    const handleAccordionClick = (accordionSectionIndex) => {
        if (document.querySelectorAll('.accordion-section')[accordionSectionIndex].classList.contains('collapsed')) {
            document.querySelectorAll('.accordion-section')[accordionSectionIndex].classList.remove('collapsed')
            document.querySelectorAll('.accordion-content')[accordionSectionIndex].classList.remove('accordion-content-hidden')
            document.querySelectorAll('.accordion-icon')[accordionSectionIndex].classList.add('accordion-icon-rotated')
            
        } else {
            document.querySelectorAll('.accordion-section')[accordionSectionIndex].classList.add('collapsed')
            document.querySelectorAll('.accordion-content')[accordionSectionIndex].classList.add('accordion-content-hidden')
            document.querySelectorAll('.accordion-icon')[accordionSectionIndex].classList.remove('accordion-icon-rotated')
        }
    }
    return (
        <div className={`${className}`}>
            {
                accordionItems.map((accordionSection, accordionSectionIndex) => {
                    console.log('accordionSection.expanded -> ', accordionSection.expanded)
                    return(
                        <div className={`accordion-section ${accordionSection.expanded || 'collapsed'}`} onClick={() => handleAccordionClick(accordionSectionIndex)}>
                        <div className="accordion-title">
                            {accordionSection.title}<Plus className="accordion-icon"/>
                        </div>
                        <div className={`accordion-content ${accordionSection.expanded || 'accordion-content-hidden'}`} dangerouslySetInnerHTML={{__html: accordionSection.content}}>
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
          content: 'DoubleWoop',
          expanded: false 
      },
      {
        title: 'Woop2',
        content: 'WeepWoop',
        expanded: false
    },
  ],
  loading: false,
  active: false
}