const entries = {
  "DAVID WHITE": {
    Masters: ["R. FOWLER", "R. MCILORY", "D. JOHNSON"],
    PGA: ["T. FINAU", "J. THOMAS", "B. DECHAMBEAU"],
    US: ["J. ROSE", "B. KOEPKA", "T. WOODS"],
    British: ["J. SPIETH", "F. MOLINARI", "J. RAHM"]
  },
  "BOBBY KELLY": {
    Masters: ["T. WOODS", "R. MCILROY", "P. MICKELSON"],
    PGA: ["D. JOHNSON", "F. MOLINARI", "J. SPIETH"],
    US: ["R. FOWLER", "J. THOMAS", "B. KOEPKA"],
    British: ["T. FLEETWOOD", "J. RAHM", "H. STENSON"]
  },
  "JASON KRAMER": {
    Masters: ["J. ROSE", "D. JOHNSON", "R. MCILROY"],
    PGA: ["B. KOEPKA", "J. THOMAS", "B. DECHAMBEAU"],
    US: ["J. SPIETH", "J. RAHM", "R. FOWLER"],
    British: ["T. WOODS", "J. DAY", "B. WATSON"]
  },
  "TOM SAXTON": {
    Masters: ["T. WOODS", "J. ROSE", "R. FOWLER"],
    PGA: ["R. MCILROY", "D. JOHNSON", "J. THOMAS"],
    US: ["B. KOEPKA", "F. MOLINARI", "T. FINAU"],
    British: ["T. FLEETWOOD", "J. RAHM", "P. CASEY"]
  },
  "NOEL SAXTON": {
    Masters: ["R. MCILROY", "J. ROSE", "T. FLEETWOOD"],
    PGA: ["B. KOEPKA", "J. DAY", "J. THOMAS"],
    US: ["D. JOHNSON", "P. CASEY", "J. RAHM"],
    British: ["F. MOLINARI", "B. DECHAMBEAU", "R. FOWLER"]
  },
  "ANDY MCCARTHY": {
    Masters: ["T. WOODS", "R. MCILORY", "T. FINAU"],
    PGA: ["R. FOWLER", "J. THOMAS", "J. RAHM"],
    US: ["J. SPIETH", "M. KUCHAR", "B. KOEPKA"],
    British: ["D. JOHNSON", "B. DECHAMBEAU", "J. ROSE"]
  },
  "JIM PAVLUK": {
    Masters: ["P. MICKELSON", "K. KISNER", "J. SPIETH"],
    PGA: ["D. JOHNSON", "J. THOMAS", "W. SIMPSON"],
    US: ["B. KOEPKA", "C. HOWELL III", "J. RAHM"],
    British: ["R. MCILROY", "T. FLEETWOOD", "X. SCHAUFFELE"]
  },
  "BRIAN DUTIL": {
    Masters: ["J. ROSE", "M. KUCHAR", "P. CASEY"],
    PGA: ["X. SCHAUFFELE", "B. KOEPKA", "K. KISNER"],
    US: ["R. FOWLER", "J. THOMAS", "D. JOHNSON"],
    British: ["F. MOLINARI", "R. MCILROY", "T. FLEETWOOD"]
  },
  "STEVE RUST": {
    Masters: ["T. FLEETWOOD", "J. THOMAS", "R. MCILROY"],
    PGA: ["J. RAHM", "T. FINAU", "H. MATSUYAMA"],
    US: ["B. KOEPKA", "R. FOWLER", "D. JOHNSON"],
    British: ["T. WOODS", "J. ROSE", "F. MOLINARI"]
  },
  "MATT MERRITT": {
    Masters: ["J. SPIETH", "D. JOHNSON", "B. WATSON"],
    PGA: ["J. ROSE", "R. MCILROY", "B. KOEPKA"],
    US: ["T. WOODS", "J. THOMAS", "P. MICKELSON"],
    British: ["T. FLEETWOOD", "M. KUCHAR", "R. FOWLER"]
  },
  "JASON BAYNE": {
    Masters: ["R. MCILROY", "J. THOMAS", "T. FLEETWOOD"],
    PGA: ["R. FOWLER", "T. WOODS", "B. DECHAMBEAU"],
    US: ["D. JOHNSON", "B. KOEPKA", "J. RAHM"],
    British: ["F. MOLINARI", "J. ROSE", "P. CASEY"]
  },
  "MIKE STUCKY": {
    Masters: ["T. WOODS", "P. MICKELSON", "B. KOEPKA"],
    PGA: ["D. JOHNSON", "J. ROSE", "R. FOWLER"],
    US: ["J. DAY", "J. THOMAS", "M. KUCHAR"],
    British: ["R. MCILROY", "F. MOLINARI", "B. DECHAMBEAU"]
  },
  "SCOTT GREENER": {
    Masters: ["B. KOEPKA", "J. THOMAS", "J. ROSE"],
    PGA: ["D. JOHNSON", "J. DAY", "F. MOLINARI"],
    US: ["R. MCILROY", "T. WOODS", "J. SPIETH"],
    British: ["J. RAHM", "R. FOWLER", "T. FLEETWOOD"]
  },
  "RYAN WHITE": {
    Masters: ["J. THOMAS", "D. JOHNSON", "M. LEISHMAN"],
    PGA: ["B. KOEPKA", "R. FOWLER", "G. WOODLAND"],
    US: ["M. KUCHAR", "J. RAHM", "X. SCHAUFFELE"],
    British: ["J. ROSE", "R. MCILROY", "T. FLEETWOOD"]
  },
  "KEN GAWLAK": {
    Masters: ["P. MICKELSON", "R. MCILROY", "B. WATSON"],
    PGA: ["B. KOEPKA", "D. JOHNSON", "J. THOMAS"],
    US: ["M. KUCHAR", "T. WOODS", "K. KISNER"],
    British: ["H. STENSON", "T. FLEETWOOD", "J. ROSE"]
  },
  "EVAN AGNEW": {
    Masters: ["R. MCILROY", "J. SPIETH", "T. FINAU"],
    PGA: ["D. JOHNSON", "J. THOMAS", "J. ROSE"],
    US: ["P. MICKELSON", "R. FOWLER", "M. KUCHAR"],
    British: ["T. FLEETWOOD", "F. MOLINARI", "X. SCHAUFFELE"]
  },
  "RYAN HAVERLAND": {
    Masters: ["R. MCILROY", "F. MOLINARI", "J. THOMAS"],
    PGA: ["D. JOHNSON", "J. RAHM", "J. ROSE"],
    US: ["T. WOODS", "J. SPIETH", "M. KUCHAR"],
    British: ["R. FOWLER", "B. KOEPKA", "T. FLEETWOOD"]
  },
  "JOHN FISHER": {
    Masters: ["D. JOHNSON", "R. FOWLER", "J. THOMAS"],
    PGA: ["T. FLEETWOOD", "J. ROSE", "J. RAHM"],
    US: ["T. WOODS", "B. KOEPKA", "B. DECHAMBEAU"],
    British: ["R. MCILROY", "H. STENSON", "J. SPIETH"]
  },
  "JASON KAGE": {
    Masters: ["J. THOMAS", "J. ROSE", "M. KUCHAR"],
    PGA: ["B. KOEPKA", "D. JOHNSON", "T. FINAU"],
    US: ["T. FLEETWOOD", "R. FOWLER", "CA. SMITH"],
    British: ["J. RAHM", "F. MOLINARI", "R. MCILROY"]
  },
  "KATE BISKUPSKI": {
    Masters: ["R. MCILROY", "T. FLEETWOOD", "R. FOWLER"],
    PGA: ["B. DECHAMBEAU", "D. JOHNSON", "CA. SMITH"],
    US: ["M. KUCHAR", "T. WOODS", "P. CASEY"],
    British: ["F. MOLINARI", "J. DAY", "B. KOEPKA"]
  },
  "NICKLAS BISKUPSKI": {
    Masters: ["M. KUCHAR", "B. KOEPKA", "J. THOMAS"],
    PGA: ["F. MOLINARI", "X. SCHAUFFELE", "R. MCILROY"],
    US: ["T. FINAU", "J. RAHM", "R. FOWLER"],
    British: ["D. JOHNSON", "J. ROSE", "B. WATSON"]
  },
  "SCOTT BISKUPSKI": {
    Masters: ["R. MCILROY", "R. FOWLER", "F. MOLINARI"],
    PGA: ["M. KUCHAR", "J. ROSE", "T. WOODS"],
    US: ["B. DECHAMBEAU", "P. REED", "G. WOODLAND"],
    British: ["P. CASEY", "B. KOEPKA", "J. RAHM"]
  },
  "NICK SAXTON": {
    Masters: ["T. WOODS", "R. MCILROY", "P. CASEY"],
    PGA: ["J. THOMAS", "J. RAHM", "R. FOWLER"],
    US: ["B. KOEPKA", "D. JOHNSON", "T. FLEETWOOD"],
    British: ["F. MOLINARI", "T. FINAU", "J. ROSE"]
  },
  "ADAM HEINEMANN": {
    Masters: ["T. WOODS", "R. MCILROY", "F. MOLINARI"],
    PGA: ["B. KOEPKA", "J. THOMAS", "J. RAHM"],
    US: ["X. SCHAUFFELE", "B. DECHAMBEAU", "R. FOWLER"],
    British: ["J. ROSE", "D. JOHNSON", "T. FLEETWOOD"]
  },
  "MIKEY CHARETTE": {
    Masters: ["J. ROSE", "D. JOHNSON", "M. KUCHAR"],
    PGA: ["A. SCOTT", "B. KOEPKA", "J. SPIETH"],
    US: ["T. WOODS", "P. CASEY", "R. MCILROY"],
    British: ["J. RAHM", "T. FLEETWOOD", "R. FOWLER"]
  },
  "JACOB MERRITT": {
    Masters: ["T. WOODS", "D. JOHNSON", "J. SPIETH"],
    PGA: ["J. THOMAS", "B. KOEPKA", "R. FOWLER"],
    US: ["B. DECHAMBEAU", "P. MICKELSON", "T. FLEETWOOD"],
    British: ["R. MCILROY", "J. RAHM", "J. ROSE"]
  },
  "BRIAN KAGE": {
    Masters: ["H. MATSUYAMA", "R. MCILROY", "J. ROSE"],
    PGA: ["T. FLEETWOOD", "J. THOMAS", "D. JOHNSON"],
    US: ["R. FOWLER", "B. DECHAMBEAU", "P. CASEY"],
    British: ["J. RAHM", "J. SPIETH", "B. KOEPKA"]
  },
  "JIMMY CUMMINGS 1": {
    Masters: ["F. MOLINARI", "T. WOODS", "J. SPIETH"],
    PGA: ["J. THOMAS", "S. GARCIA", "M. KUCHAR"],
    US: ["P. MICKELSON", "D. JOHNSON", "J. DAY"],
    British: ["R. MCILROY", "R. FOWLER", "J. ROSE"]
  },
  "JIMMY CUMMINGS 2": {
    Masters: ["J. ROSE", "D. JOHNSON", "R. MCILROY"],
    PGA: ["J. THOMAS", "T. WOODS", "B. DECHAMBEAU"],
    US: ["J. RAHM", "R. FOWLER", "J. DAY"],
    British: ["F. MOLINARI", "T. FLEETWOOD", "P. CASEY"]
  },
  "ANTHONY FONTANA": {
    Masters: ["T. WOODS", "R. FOWLER", "J. SPIETH"],
    PGA: ["R. MCILROY", "D. JOHNSON", "J. THOMAS"],
    US: ["B. KOEPKA", "F. MOLINARI", "J. ROSE"],
    British: ["P. CASEY", "B. DECHAMBEAU", "M. KUCHAR"]
  },
  "JOE GREGUS": {
    Masters: ["D. JOHNSON", "J. ROSE", "J. SPIETH"],
    PGA: ["B. KOEPKA", "J. THOMAS", "T. FLEETWOOD"],
    US: ["R. FOWLER", "J. RAHM", "X. SCHAUFFELE"],
    British: ["R. MCILROY", "T. FINAU", "A. SCOTT"]
  },
  "DAVID HAVERLAND": {
    Masters: ["R. MCILROY", "T. FINAU", "J. THOMAS"],
    PGA: ["B. DECHAMBEAU", "S. GARCIA", "X. SCHAUFFELE"],
    US: ["B. KOEPKA", "T. WOODS", "D. JOHNSON"],
    British: ["F. MOLINARI", "J. ROSE", "J. RAHM"]
  },
  "CHRIS EASTER": {
    Masters: ["J. SPIETH", "J. RAHM", "H. MATSUYAMA"],
    PGA: ["A. SCOTT", "S. GARCIA", "J. THOMAS"],
    US: ["T. FLEETWOOD", "B. KOEPKA", "D. JOHNSON"],
    British: ["F. MOLINARI", "J. ROSE", "R. MCILROY"]
  },
  "SEAN LANDIS 1": {
    Masters: ["R. MCILROY", "F. MOLINARI", "P. CASEY"],
    PGA: ["B. KOEPKA", "J. THOMAS", "J. DAY"],
    US: ["T. WOODS", "P. MICKELSON", "D. JOHNSON"],
    British: ["T. FLEETWOOD", "J. ROSE", "J. RAHM"]
  },
  "SEAN LANDIS 2": {
    Masters: ["J. ROSE", "D. JOHNSON", "T. FINAU"],
    PGA: ["F. MOLINARI", "M. KUCHAR", "R. MCILROY"],
    US: ["B. KOEPKA", "J. DAY", "J. SPIETH"],
    British: ["T. FLEETWOOD", "J. THOMAS", "S. GARCIA"]
  },
  "JIM TUBBS": {
    Masters: ["D. JOHNSON", "M. KUCHAR", "H. MATSUYAMA"],
    PGA: ["B. DECHAMBEAU", "J. DAY", "T. WOODS"],
    US: ["J. THOMAS", "B. KOEPKA", "J. ROSE"],
    British: ["R. MCILROY", "T. FLEETWOOD", "P. CASEY"]
  },
  "BEN GERHARDT": {
    Masters: ["R. MCILROY", "T. WOODS", "J. RAHM"],
    PGA: ["R. FOWLER", "J. THOMAS", "B. DECHAMBEAU"],
    US: ["T. FLEETWOOD", "J. ROSE", "F. MOLINARI"],
    British: ["J. SPIETH", "D. JOHNSON", "B. KOEPKA"]
  },
  "MIKE HLEBOVY": {
    Masters: ["R. MCILROY", "F. MOLINARI", "T. WOODS"],
    PGA: ["D. JOHNSON", "J. THOMAS", "B. DECHAMBEAU"],
    US: ["B. KOEPKA", "J. HOLMES", "R. FOWLER"],
    British: ["J. ROSE", "T. FLEETWOOD", "M. KUCHAR"]
  },
  "JASON RAKSNIS": {
    Masters: ["J. SPIETH", "F. MOLINARI", "R. FOWLER"],
    PGA: ["D. JOHNSON", "T. WOODS", "J. THOMAS"],
    US: ["P. MICKELSON", "J. ROSE", "M. LEISHMAN"],
    British: ["R. MCILROY", "T. FLEETWOOD", "H. STENSON"]
  }
};

export default entries;
