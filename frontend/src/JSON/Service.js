import img1 from '../assets/Service1.jpg';
import img2 from '../assets/ServiceLabor.jpg';
import img3 from '../assets/ServiceResidential.jpg';
import img4 from '../assets/Service12.jpg';
import img5 from '../assets/ServiceRetail.jpg';
import img6 from '../assets/ServiceHealth.jpg';
import img7 from '../assets/Service9.jpg';
import img8 from '../assets/Service8.jpg';
import img9 from '../assets/ServiceEvent.jpg';
import img10 from '../assets/Service10.jpg';
import img11 from '../assets/ServiceWindow.jpg';
import img12 from '../assets/ServiceCarpet.jpg';
import img13 from '../assets/ServiceFloor.jpg';
import img14 from '../assets/ServicePolish.png';
import img15 from '../assets/ServicePresser.jpg';
import img16 from '../assets/ServiceGraffiti.jpg';
import img17 from '../assets/ServiceFlood.jpg';

const service = [
    {
        "_id": 1,
        "image": img1,
        "title": "Builders Cleaning",
        "description": "A detailed 3 steps of builders cleaning will be handled by our expert cleaners."
    },
    {
        "_id": 2,
        "image": img2,
        "title": "Construction Labour",
        "description": "Experienced and capable construction Labor for the booming construction industry of Victoria by Skill City Facility Solutions."
    },
    {
        "_id": 3,
        "image": img3,
        "title": "Service 3",
        "description": "Residential Cleaning",
        "detail": "Our residential cleaning service caters to all types of homes, including apartments, townhouses, and family houses. Whether you need a regular weekly clean or a thorough deep clean before special occasions, our professional cleaners cover all areas—kitchens, bathrooms, bedrooms, living rooms, and more. We focus on removing dust, grime, stains, and allergens, leaving your home fresh, hygienic, and welcoming. We tailor each clean to your specific requirements, using pet- and child-safe products where needed."
    },
    {
        "_id": 4,
        "image": img4,
        "title": "Service 4",
        "description": "Office Cleaning",
        "detail": "A clean office improves productivity and leaves a positive impression on clients and employees alike. We offer comprehensive office cleaning services, including dusting workstations, sanitising shared equipment, vacuuming carpets, mopping floors, emptying bins, and cleaning kitchens and bathrooms. Our flexible scheduling means we can clean outside working hours or during business hours with minimal disruption. We customise our service plans based on your office size, workforce, and daily operations."
    },
    {
        "_id": 5,
        "image": img5,
        "title": "Service 5",
        "description": "Retail Store Cleanup",
        "detail": "Retail environments demand a pristine presentation to attract and retain customers. Our retail cleaning service focuses on high-traffic areas such as shop floors, checkout counters, fitting rooms, glass displays, and public restrooms. We deliver detailed cleaning that removes dirt, smudges, and rubbish, ensuring your store remains inviting and professional. We can provide daily, evening, or after-hours cleaning tailored to your store’s trading schedule."
    },
    {
        "_id": 6,
        "image": img6,
        "title": "Service 6",
        "description": "Healthcare Cleaning",
        "detail": "Healthcare settings require strict hygiene protocols to prevent infection and ensure patient safety. Our experienced team delivers specialised cleaning for medical centres, clinics, dental practices, and aged care facilities. We use hospital-grade disinfectants and follow rigorous cleaning procedures to sanitise all surfaces, equipment, and waiting areas. We also maintain confidentiality and privacy standards while providing discreet, thorough cleaning tailored to healthcare industry regulations.."
    },
    {
        "_id": 7,
        "image": img7,
        "title": "Service 7",
        "description": "Educational Cleaning",
        "detail": "Schools, universities, and childcare centres require thorough, regular cleaning to create safe and healthy environments for students and staff. Our educational cleaning services cover classrooms, libraries, sports facilities, cafeterias, and washrooms. We pay special attention to disinfecting high-touch areas such as desks, doorknobs, and handrails to minimise the spread of germs and illnesses. We offer flexible schedules, including after-hours or weekend cleans to avoid disrupting learning activities."
    },
    {
        "_id": 8,
        "image": img8,
        "title": "Service 8",
        "description": "Transport Cleaning",
        "detail": "From buses and trains to transport depots and stations, cleanliness is essential for public safety and comfort. Our transport cleaning service includes interior and exterior cleaning of vehicles, platforms, waiting areas, ticket booths, and restrooms. We specialise in fast, thorough cleaning that minimises downtime and ensures vehicles and facilities meet hygiene standards and customer expectations. Our teams work around operational schedules to provide convenient and non-disruptive service."
    },
    {
        "_id": 9,
        "image": img9,
        "title": "Service 9",
        "description": "Event and Venue Cleaning",
        "detail": "Whether you’re hosting a corporate event, concert, wedding, or sports game, maintaining cleanliness throughout the event is critical. We provide comprehensive event cleaning services including pre-event preparations, waste management during the event, and post-event cleanup. Our teams quickly remove rubbish, clean floors, refresh bathrooms, and sanitise common areas to ensure a positive experience for all attendees and organisers."
    },
    {
        "_id": 10,
        "image": img10,
        "title": "Service 10",
        "description": "Periodic Cleaning",
        "detail": "Scheduled deep cleaning is vital for maintaining hygiene and appearance in both residential and commercial spaces. We offer customised periodic cleaning services—weekly, fortnightly, monthly, or quarterly—to meet your specific needs and budget. Our periodic cleans cover areas that may be missed in routine cleaning, including upholstery, vents, behind equipment, and less accessible surfaces. Regular maintenance helps prolong the life of your property’s finishes and furnishings."
    },
    {
        "_id": 11,
        "image": img11,
        "title": "Service 11",
        "description": "Window Cleaning",
        "detail": "We provide comprehensive window cleaning services for both interior and exterior glass surfaces across residential and commercial buildings. Our trained technicians use specialised equipment and safe cleaning solutions to deliver streak-free, clear windows, enhancing the natural light and appearance of your property. For high-rise or difficult-to-access windows, we employ water-fed pole systems or abseiling teams, ensuring safety and thoroughness."
    },
    {
        "_id": 12,
        "image": img12,
        "title": "Service 12",
        "description": "Carpet Cleaning",
        "detail": "Our professional carpet cleaning service uses advanced steam and dry cleaning methods to remove dirt, stains, allergens, and odours, significantly improving indoor air quality and carpet lifespan. Suitable for homes, offices, hotels, and retail spaces, we customise treatments based on carpet type and condition. Additional services include stain protection, deodorising, and fast-drying techniques to minimise disruption to your daily activities."
    },
    {
        "_id": 13,
        "image": img13,
        "title": "Service 13",
        "description": "Hard Floor Maintenance",
        "detail": "Maintaining hard floors is essential for safety, appearance, and durability. We offer a complete range of floor maintenance services, including stripping, scrubbing, polishing, and sealing of vinyl, tile, concrete, and timber floors. Regular professional maintenance protects flooring from wear and tear, extends its life, and keeps your space looking clean and professional."
    },
    {
        "_id": 14,
        "image": img14,
        "title": "Service 14",
        "description": "Strip and Sealing",
        "detail": "Our strip and seal service removes old floor sealants and coatings, preparing floors for a fresh, protective layer. This process is essential for commercial and retail spaces with heavy foot traffic, restoring shine and protecting surfaces from damage, stains, and wear. We use industry-grade sealants that enhance durability and appearance while being safe and environmentally responsible."
    },
    {
        "_id": 15,
        "image": img15,
        "title": "Service 15",
        "description": "Pressure Cleaning",
        "detail": "Pressure cleaning is a highly effective way to restore the look of exterior surfaces such as driveways, building facades, patios, fences, and walkways. Our high-pressure cleaning equipment removes dirt, mould, algae, graffiti, and oil stains safely and efficiently without damaging the underlying material. Regular pressure cleaning improves curb appeal and prevents surface degradation."
    },
    {
        "_id": 16,
        "image": img16,
        "title": "Service 16",
        "description": "Graffiti Removal",
        "detail": "Graffiti can negatively impact your property’s appearance and reputation. Our graffiti removal service uses specialised, non-abrasive products to safely eliminate paint from various surfaces including brick, concrete, metal, glass, and timber. We act quickly to restore your property’s clean, professional look while minimising downtime and disruption."
    },
    {
        "_id": 17,
        "image": img17,
        "title": "Service 17",
        "description": "Emergency Flood and Mould Clean-Up",
        "detail": "Water damage and mould growth pose serious health and structural risks. Our rapid-response emergency clean-up service extracts water, thoroughly dries affected areas, removes mould, and applies anti-microbial treatments to prevent reoccurrence. We work quickly to minimise damage, restore safety, and comply with health standards, helping you get your property back to normal as soon as possible."
    },
]

export default service; 