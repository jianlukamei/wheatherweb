ar simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#ADD8E6",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    INAN: {
      name: "Andaman and Nicobar",
      description: " "
    },
    INAP: {
      name: "Andhra Pradesh",
      description: " "
    },
    INAR: {
      name: "Arunachal Pradesh",
      description: " "
    },
    INAS: {
      name: "Assam",
      description: " "
    },
    INBR: {
      name: "Bihar",
      description: " "
    },
    INCH: {
      name: "Chandigarh",
      description: " "
    },
    INCT: {
      name: "Chhattisgarh",
      description: " "
    },
    INDH: {
      name: "Dādra and Nagar Haveli and Damān and Diu",
      description: " "
    },
    INDL: {
      name: "Delhi",
      description: " "
    },
    INGA: {
      name: "Goa",
      description: " "
    },
    INGJ: {
      name: "Gujarat",
      description: " "
    },
    INHP: {
      name: "Himachal Pradesh",
      description: " "
    },
    INHR: {
      name: "Haryana",
      description: " "
    },
    INJH: {
      name: "Jharkhand",
      description: " "
    },
    INJK: {
      name: "Jammu and Kashmir",
      description: " "
    },
    INKA: {
      name: "Karnataka",
      description: " "
    },
    INKL: {
      name: "Kerala",
      description: " "
    },
    INLA: {
      name: "Ladakh",
      description: " "
    },
    INLD: {
      name: "Lakshadweep",
      description: " "
    },
    INMH: {
      name: "Maharashtra",
      description: " "
    },
    INML: {
      name: "Meghalaya",
      description: " "
    },
    INMN: {
      name: "Manipur",
      description: " "
    },
    INMP: {
      name: "Madhya Pradesh",
      description: " "
    },
    INMZ: {
      name: "Mizoram",
      description: " "
    },
    INNL: {
      name: "Nagaland",
      description: " "
    },
    INOR: {
      name: "Orissa",
      description: " "
    },
    INPB: {
      name: "Punjab",
      description: " "
    },
    INPY: {
      name: "Puducherry",
      description: " "
    },
    INRJ: {
      name: "Rajasthan",
      description: " "
    },
    INSK: {
      name: "Sikkim",
      description: " "
    },
    INTG: {
      name: "Telangana",
      description: " "
    },
    INTN: {
      name: "Tamil Nadu",
      description: " "
    },
    INTR: {
      name: "Tripura",
      description: " "
    },
    INUP: {
      name: "Uttar Pradesh",
      description: " "
    },
    INUT: {
      name: "Uttaranchal",
      description: " "
    },
    INWB: {
      name: "West Bengal",
      description: " "
    }
  },
  locations: {
    "0": {
      name: "New Delhi",
      lat: "28.6",
      lng: "77.2"
    }
  },
  labels: {
    INAN: {
      name: "Andaman and Nicobar",
      parent_id: "INAN"
    },
    INAP: {
      name: "Andhra Pradesh",
      parent_id: "INAP"
    },
    INAR: {
      name: "Arunachal Pradesh",
      parent_id: "INAR"
    },
    INAS: {
      name: "Assam",
      parent_id: "INAS"
    },
    INBR: {
      name: "Bihar",
      parent_id: "INBR"
    },
    INCH: {
      name: "Chandigarh",
      parent_id: "INCH"
    },
    INCT: {
      name: "Chhattisgarh",
      parent_id: "INCT"
    },
    INDH: {
      name: "Dādra and Nagar Haveli and Damān and Diu",
      parent_id: "INDH"
    },
    INDL: {
      name: "Delhi",
      parent_id: "INDL"
    },
    INGA: {
      name: "Goa",
      parent_id: "INGA"
    },
    INGJ: {
      name: "Gujarat",
      parent_id: "INGJ"
    },
    INHP: {
      name: "Himachal Pradesh",
      parent_id: "INHP"
    },
    INHR: {
      name: "Haryana",
      parent_id: "INHR"
    },
    INJH: {
      name: "Jharkhand",
      parent_id: "INJH"
    },
    INJK: {
      name: "Jammu and Kashmir",
      parent_id: "INJK"
    },
    INKA: {
      name: "Karnataka",
      parent_id: "INKA"
    },
    INKL: {
      name: "Kerala",
      parent_id: "INKL"
    },
    INLA: {
      name: "Ladakh",
      parent_id: "INLA"
    },
    INLD: {
      name: "Lakshadweep",
      parent_id: "INLD"
    },
    INMH: {
      name: "Maharashtra",
      parent_id: "INMH"
    },
    INML: {
      name: "Meghalaya",
      parent_id: "INML"
    },
    INMN: {
      name: "Manipur",
      parent_id: "INMN"
    },
    INMP: {
      name: "Madhya Pradesh",
      parent_id: "INMP"
    },
    INMZ: {
      name: "Mizoram",
      parent_id: "INMZ"
    },
    INNL: {
      name: "Nagaland",
      parent_id: "INNL"
    },
    INOR: {
      name: "Orissa",
      parent_id: "INOR"
    },
    INPB: {
      name: "Punjab",
      parent_id: "INPB"
    },
    INPY: {
      name: "Puducherry",
      parent_id: "INPY"
    },
    INRJ: {
      name: "Rajasthan",
      parent_id: "INRJ"
    },
    INSK: {
      name: "Sikkim",
      parent_id: "INSK"
    },
    INTG: {
      name: "Telangana",
      parent_id: "INTG"
    },
    INTN: {
      name: "Tamil Nadu",
      parent_id: "INTN"
    },
    INTR: {
      name: "Tripura",
      parent_id: "INTR"
    },
    INUP: {
      name: "Uttar Pradesh",
      parent_id: "INUP"
    },
    INUT: {
      name: "Uttaranchal",
      parent_id: "INUT"
    },
    INWB: {
      name: "West Bengal",
      parent_id: "INWB"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};





const apiKey = '170b5134410ed196543b75750b51f951';

// Define key districts of Nagaland and coordinates
const districts = {
  "Kohima": { lat: 25.6747, lon: 94.1109 },
  "Dimapur": { lat: 25.9043, lon: 93.7259 },
  "Mokokchung": { lat: 26.3246, lon: 94.5284 },
  "Tuensang": { lat: 26.2804, lon: 94.8186 },
  "Wokha": { lat: 26.0976, lon: 94.2665 },
  "Zunheboto": { lat: 26.0125, lon: 94.5363 },
  "Phek": { lat: 25.6667, lon: 94.5 },
  "Mon": { lat: 26.75, lon: 95.1 },
  "Longleng": { lat: 26.5, lon: 94.8 },
  "Kiphire": { lat: 25.8687, lon: 94.7789 },
  "Noklak": { lat: 26.2603, lon: 95.0169 }
};

// Preload weather data
async function loadNagalandWeather() {
  const weatherReports = [];

  for (const district in districts) {
    const { lat, lon } = districts[district];
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      const weather = `${district}: ${data.weather[0].description}, ${data.main.temp}°C`;
      weatherReports.push(weather);
    } catch (e) {
      weatherReports.push(`${district}: Weather unavailable`);
    }
  }

  // Combine into HTML
  const weatherHTML = weatherReports.join('<br>');

  // Inject into map's Nagaland description
  simplemaps_countrymap_mapdata.state_specific.INNL.description = weatherHTML;

  // Refresh map popup data
  if (simplemaps_countrymap) {
    simplemaps_countrymap.refresh();
  }
}

// Wait for the map to be ready, then load weather
window.addEventListener('load', () => {
  setTimeout(loadNagalandWeather, 1000); // slight delay to ensure map is ready
});

