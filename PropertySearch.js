 import React, { useState } from 'react';
 import Select from 'react-select';

 const PropertySearch = () => {
  // List of properties for dropdown
  const propertyOptions = [
    { value: 'america', label: 'America' },
   { value: 'india', label: 'India' },
     { value: 'thailand', label: 'Thailand' },
     { value: 'canada', label: 'Canada' },
     { value: 'dubai', label: 'Dubai' },
   ];

   const [selectedProperty, setSelectedProperty] = useState(null);
   const handlePropertyChange = (selectedOption) => {
     setSelectedProperty(selectedOption);
   };

   return (
     <div className="property-search-container">
       <h1>Find The Place</h1>
      
       <Select
         options={propertyOptions}
         value={selectedProperty}
         onChange={handlePropertyChange}
         isSearchable={true}
         placeholder="Select a Place name"
         className="property-dropdown"
       />

       {/* Show the selected property below */}
       {selectedProperty && (
         <div className="selected-property">
           <h2>I selected: {selectedProperty.label}</h2>
         </div>
      )}
     </div>
     
   );
 };

export default PropertySearch;


// import React, { useState } from 'react';
// import Select from 'react-select';

// const PropertySearch = () => {
//   // Primary property types for the first dropdown
//   const propertyOptions = [
//     { value: 'apartment', label: 'Apartment' },
//     { value: 'villa', label: 'Villa' },
//     { value: 'townhouse', label: 'Townhouse' },
//     { value: 'condo', label: 'Condo' },
//     { value: 'duplex', label: 'Duplex' },
//   ];

//   // Sub-options based on selected property type
//   const subOptions = {
//     apartment: [
//       { value: 'studio', label: 'Studio Apartment' },
//       { value: '1br', label: '1 Bedroom Apartment' },
//       { value: '2br', label: '2 Bedroom Apartment' },
//     ],
//     villa: [
//       { value: '3br', label: '3 Bedroom Villa' },
//       { value: '4br', label: '4 Bedroom Villa' },
//     ],
//     townhouse: [
//       { value: '2br', label: '2 Bedroom Townhouse' },
//       { value: '3br', label: '3 Bedroom Townhouse' },
//     ],
//     condo: [
//       { value: '1br', label: '1 Bedroom Condo' },
//       { value: '2br', label: '2 Bedroom Condo' },
//     ],
//     duplex: [
//       { value: '3br', label: '3 Bedroom Duplex' },
//       { value: '4br', label: '4 Bedroom Duplex' },
//     ],
//   };

//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [selectedSubProperty, setSelectedSubProperty] = useState(null);

//   const handlePropertyChange = (selectedOption) => {
//     setSelectedProperty(selectedOption);
//     setSelectedSubProperty(null); // Reset sub-property selection when main property changes
//   };

//   const handleSubPropertyChange = (selectedOption) => {
//     setSelectedSubProperty(selectedOption);
//   };

//   return (
//     <div className="property-search-container">
//       <h1>Find Your Property</h1>
      
//       <Select
//         options={propertyOptions}
//         value={selectedProperty}
//         onChange={handlePropertyChange}
//         isSearchable={true}
//         placeholder="Select a property type"
//         className="property-dropdown"
//       />

//       {/* Conditional rendering for the sub-property dropdown */}
//       {selectedProperty && (
//         <Select
//           options={subOptions[selectedProperty.value]}
//           value={selectedSubProperty}
//           onChange={handleSubPropertyChange}
//           isSearchable={true}
//           placeholder={Select a ${selectedProperty.label} type}
//           className="sub-property-dropdown"
//         />
//       )}

//       {/* Show the selected properties below */}
//       {selectedProperty && selectedSubProperty && (
//         <div className="selected-property">
//           <h2>
//             You selected: {selectedProperty.label} - {selectedSubProperty.label}
//           </h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PropertySearch;