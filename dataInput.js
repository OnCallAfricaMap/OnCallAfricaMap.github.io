
// This is where all data that is displayed on the map is colleted together to then be sent to the map creator that formats it into the map. 

// ######## DISTRICT FOR WATERAID R2R WASH PROGRAM ##########
washDistricts = {"Kazungula": 2022, 
                 "Mwandi" : 2022, 
                 "Sesheke": 2022}; 

// ######## DISTRICT FOR HEALTH FACALITY IMPROVEMENT PROGRAM ##########
healthFacalityDistricts = {"Zimba" : 2022, 
                           "Kazungula" : 2022}

// ######## DISTRICT FOR SOLAR PROGRAMME ##########
digitalHealthdistricts = {"Kazungula" : 2022}



// ######## the URL where you will be taken if filled in districted is clicked #########
washLinkURL = null; 
healthFacalityURL = null; 
digitalHealthURL = null; 


// HEALTH FACALITY DATA 

KanyangaStatsData = {
    "Kanyanga RHP" : {
        "Population" : 24695, 
        "No. Nurses" : 2,
        "No. COs" : 1,
        "No. CHA" : 1, 
        "No. EHT" : 1,
        "No. beds" : 5,
        "Solar Power" : "Yes (Vaccine Fridge Only)", 
        "Running Water" : "No", 
        "Nearest Water Source" : "Borehole (435m)", 
        "Most Common Illnesses" : "URTI, Diarrhoea, Musculoskeletal, Digestive illness, Dental", 
    },
    "Siakasipa" : {
        "No CHWs" : 10,
        "Nearest Water Source" : "Borehole - nearly dry(174m) <br> River (974m)"
    },
    "Simulelabana" : {
        "No CHWs" : 7,
        "Nearest Water Source" : "Borehole (486m)"
    },
    "Simusunge"  : {
        "No CHWs" : 10
    },
    "Siatuziba"  : {
        "No CHWs" : 10
    },
    "Matabele"  : {
        "No CHWs" : 10,
        "Nearest Water Source" : "River (644m)"
    },
    "Safari"  : {
        "No CHWs" : 10,
        "Nearest Water Source" : "Borehole (1.4km)"
    },
    "Chilikwazi"  : {
        "No CHWs" : 10,
        "Nearest Water Source" : "River (544m)"
    },
    "Masanzya"  : {
        "No CHWs" : 10,
        "Nearest Water Source" : "Borehole (392m)"
    },
    "Masite"  : {
        "No CHWs" : 7, 
        "Nearest Water Source" : "Dam (859m)"
    },
    "Nkungwa" : {
        "No CHWs" : 4,
        "Nearest Water Source" : "Borehole - nearly dry (69m) <br> River (662m)"
    }, 
    "Siejumba" : {
        "No CHWs" : 5,
        "Nearest Water Source" : "Borehole (5m)"
    },
    "NG'andu" : {
        "Nearest Water Source" : "River (577m)"
    }
}

ChalimongelaStatsData = {
  "Chalimongela RHP" : { 
        "Population" : 7568, 
        "No. Nurses" : 1,
        "No. COs" : 0,
        "No. CHA" : 1, 
        "No. EHT" : 0,
        "No. beds" : 5,
        "Solar Power" : "Yes (Vaccine Fridge Only)", 
        "Running Water" : "No", 
        "Nearest Water Source" : "Borehole (42m)", 
        "Most Common Illnesses" : "URTI, Diarrhoea, Musculoskeletal, Dental", 
    },
  "Chliobe" : {
      "No CHWs" : 1,
      "Nearest Water Source" : "Borehole (190m)"
  }, 
  "Chikuyu" : {
    "No CHWs" : 3,
    "Nearest Water Source" : "Borehole (1.4km)"
  },
  "Pukuma" : {
     "Nearest Water Source" : "Borehole - nearly dry(200m)"
  },
  "Chilubwa" : {
     "Nearest Water Source" : "Borehole (85m)"
  },
  "Kabaule" : {
     "Nearest Water Source" : "Borehole (766m)"
  }  
}
    

KanyangaData = {
    "points" : "./kanyanga/kanyangaOutreachPosts.gpx",
    "routes" : "./kanyanga/kanyangaRoutes.gpx",
    "stats" : KanyangaStatsData,
    "URL" : "https://www.oncallafrica.org/kanyanga-rural-health-post"
}

ChalimongelaData = {
    "points" : "./chalimongela/chalimongelaPoints.gpx",
    "routes" : "./chalimongela/chalimongelaRoutes.gpx",
    "stats" : ChalimongelaStatsData, 
    "URL" : "https://www.oncallafrica.org/chalimongela-rural-health-post/"
}

communityData = {
    "Kanyanga" : KanyangaData,
    "Chalimongela" : ChalimongelaData
}

// WASH DISTRICT DATA 

firstData = {
    "points" : "WASHHealthCentres/washHealthCentres1.gpx",
    "routes" : null,
    "stats" : null, 
    "URL" : null
}

washDistrictsData = {
    "first" : firstData
}

// INTRESTING FEATURES 

intrestingFeatures = {
    "Livingstone General Hospital" : {
        type : "hospital", 
        location : [-17.84144894033052, 25.853454425537137]
    }, 
    "Zimba Mission Hospital" : {
        type : "hospital", 
        location : [-17.317832093473495, 26.20335468459807]
    }, 
    "Kazungula Hospital" : {
        type : "hospital", 
        location : [-17.771357372658734, 25.271446531179887]
    },
    "Livingstone District Health Office" : {
        type : "office", 
        location : [-17.853783922094156, 25.858714500939616]
    },
    "Maramba Clinic" : {
        type : "health", 
        location : [-17.847380784499567, 25.872039715393576]
    }, 
    "Mahmatma Ghandi Clinic" : {
        type : "health", 
        location : [-17.858147733338797, 25.842468701713756]
    }
}
