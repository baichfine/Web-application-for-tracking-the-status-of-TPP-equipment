import React from 'react';
import Cookies from 'js-cookie';
import ReactDOM from 'react-dom';
import './fonts/fonts.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Head from './Head.js';
import Search from './Search.js';
import Footer from './Footer.js';
import BasketModal from './basketModal.js';
import BasketModalNull from './basketModalNull.js';
import CityHeader from './cityHeader.js';
import MyOrders from './MyOrders.js';
import EntranceLoginModal from './entranceLoginModal.js';
import PersonalData from './PersonalData.js';
import OrderCheckOut from './orderCheckout.js';
import update from 'immutability-helper';
import MyPassword from './MyPassword.js';
import MyCompany from './MyCompany.js';
import MyRegistration from './MyRegistration.js';
import MyAuto from './MyAuto.js';

class App extends React.Component{

constructor(props) {
  super(props);
  this.state = {
      error: null,
      isLoaded: false,
      items: [],
      selectedCity: Cookies.get('city'),
      isClickedSearch: false,
      isClickedLogout: false,
      stateClick: false,
      searchRequest: '',
      actionClick: '',
      actionState: '',
      sessionKey: Cookies.get('PHPSESSID'),
      logoutEntrance: Cookies.get('PHPSESSID'),
      myOrdersActive: false,
      basketCount: 0,
      about: false,
      delivery: false,
      payment: false,
      warrantly: false,
      offer: false,
      mainPage: true,
      productInBasket: false,
      myOrdersChange: false,
      clickedMyOrders: false,
      myPersonalData: false,
      brandList: false,
      selectedBrandId: '',
      selectedDetailId: '',
      selectedBrand: '',
      vinShow: true,
      arrayDataProba: {},
      clickBasketButton: false,
      arrayBasket: {},
      basketClose: true,
      basketCountShow: true,
      authNeed: true,
      basketCountV: {},
      basketCountW: true,
      basketCountDelete: false,
      brandsNull: false,
      basketSave: false,
      basketSaveControl: false,
      orderActiveWindow: false,
      cityOrder: false,
      paymentMethods: false,
      saveArrayBasket: [],
      saveOrder: false,
      basketTwo: true,
      auth: false,
      sessionTimeOut: false,
      myOrderData: {},
      getZakazData: [],
      getZakaz: false,
      authNeed2: true,
      basketCountShow2: true,
      getZakazDetails: false,
      citySearch: false,
      cityInput: '',
      cityArray: {},
      authNeed3: true,
      searchClick: true,
      countZakaz: 0,
      updateOrders: false,
      updateWithMainPage: false,
      searchNull: false,
      clickBasketButtonNull: false,
      api: 'http://id109.idetta.ru/api/index.php',
      getZakazStatuses: false,
      getZakazDetailStatuses: false,
      arrayZakazStatus: [],
      arrayZakazDetailStatus: [],
      cityAnswerModal: false,
      userData: false,
      userDataList: [],
      selectedStreet: '',
      clickReg: false,
      clickEnt: false,
      clickErr: false,
      myPassword: false,
      changeAccepted: false,
      clickUDSave: false,
      endSearch: false,
      searchRequestSort1: "",
      searchLoad: false,
      arraySort1DataProba: [],
      sort1Load: false,
      updateSort1: false,
      basketClear: false,
      arrayBasketNew: [],
      updateProduct: false,
      companyID: 0,
      company: false,
      myCompanies: false,
      arrayCompany: {},
      arrayMyCompanies: {},
      companyEdit: false,
      deleteOrder: false,
      orderTrue: false,
      deleteOrderStop: true,
      dataButton: false,
      lastname: ' кабинет ',
      name: 'Личный ',
      dataUser: true,
      newCompany: false,
      sklads: false,
      arraySkladDeliveries: {},
      addressSelect: '',
      companySelected: '',
      idFizLizo: '',
      companyChange: false,
      companyRegistration: false,
      registrationNew: false,
      currentCompany: false,
      fioreg: '',
      emailreg: '',
      phonereg: '',
      errorReg: null,
      companyCurrent: {},
      updateOrders: false,
      openBasket: false,
      updateDate: false,
      saveCompany: false,
      deleteCompany: false,
      myCars: false,
      arrayMyCars: [],
      autoMarks: false,
      newCar: false,
      saveCompanyCar: false,
      carsEdit: false,
      deleteCompanyCar: false
  };
  this.handleSearchChange= this.handleSearchChange.bind(this);
  this.updateClick= this.updateClick.bind(this);
}

//Страницы
aboutPage = (e) => {
  this.setState({
    about: true,
    mainPage: false,
    offer: false,
    warrantly: false,
    payment: false,
    delivery: false,
    isClickedSearch: false,
    brandList: false,
    vinShow: false,
    orderActiveWindow: false,
    searchClick: false
  });
}
deliveryPage = (e) => {
  this.setState({
    delivery: true,
    mainPage: false,
    payment: false,
    offer: false,
    warrantly: false,
    about: false,
    isClickedSearch: false,
    brandList: false,
    vinShow: false,
    orderActiveWindow: false,
    searchClick: false
  });
}
paymentPage = (e) => {
  this.setState({
    payment: true,
    mainPage: false,
    offer: false,
    warrantly: false,
    delivery: false,
    about: false,
    isClickedSearch: false,
    brandList: false,
    vinShow: false,
    orderActiveWindow: false,
    searchClick: false
  });
}
warrantlyPage = (e) => {
  this.setState({
    warrantly: true,
    mainPage: false,
    payment: false,
    offer: false,
    delivery: false,
    about: false,
    isClickedSearch: false,
    brandList: false,
    vinShow: false,
    orderActiveWindow: false,
    searchClick: false
  });
}
offerPage = (e) => {
  this.setState({
    offer: true,
    mainPage: false,
    warrantly: false,
    payment: false,
    delivery: false,
    about: false,
    isClickedSearch: false,
    brandList: false,
    vinShow: false,
    orderActiveWindow: false,
    searchClick: false
  });
}
mainPage = (e) => {
  this.setState({
    offer: false,
    mainPage: true,
    warrantly: false,
    payment: false,
    delivery: false,
    about: false,
    isClickedSearch: false,
    brandList: false,
    vinShow: true,
    orderActiveWindow: false,
    searchClick: false,
    paymentMethods: false
  });
  if(this.state.updateWithMainPage === true){
    this.setState({
      basketCountShow: true,
      basketCountShow2: true,
      authNeed3: false,
      basketCountW: true,
      getZakaz: false,
      updateOrders: false
    })
  }
}
otherPages = (e) => {
  this.setState({
    isClickedSearch: true
  });
}
//Город
updateCity = (cityValue) => {
    this.setState({selectedCity: cityValue});
        Cookies.set('city',cityValue, { path: '/' })
}
updateStreet = (cityStreet) => {
    this.setState({selectedStreet: cityStreet});
        Cookies.set('street',cityStreet, { path: '/' })
}
nullCity = (e) => {
  this.setState({
    cityArray: ''})
    this.state.cityArray = '';
}
cityAnswerModalClose = (e) => {
  this.setState({
    cityAnswerModal: false  });
    this.state.cityAnswerModalClose = false;
}
citySearchChange = (citySearchValue) => {
 this.setState({cityInput: citySearchValue.target.value});
 this.state.cityInput = citySearchValue.target.value;
if(this.state.cityInput.length >= 3) this.citySearchFunction();
else  this.nullCity();
}
//AJAX запросы
authNeedFunction = (e) => {
  this.setState({
    actionClick: 'user_login',
    authNeed2: false,
    authNeed3: false,
    authNeed: false},  () =>{this.componentDidMount(e); },
)
}   //Авторизация пользователя                    user_login
companyRegistration = (e) => {
  this.setState({
    companyRegistration: false,
    registrationNew: true,
    actionClick: 'register_user'}, () =>{this.componentDidMount(e);}
  )
}//Регистрация юридического лица               register_user
logoutClick = (e) => {
  this.setState({
    isClickedLogout: true,
    actionState: false,
    actionClick: 'logout',
    stateClick: true,
    auth: '',
    logoutEntrance: false,
    basketCount: 0,
    isClickedSearch: false,

    vinShow: true,
    orderActiveWindow: false,
    cityOrder: false},  () =>{this.componentDidMount(e); Cookies.remove('PHPSESSID');},)}        //Выход из ЛК                                 logout
userDataInfo = (e) => {

  this.setState({
    actionClick: 'get_user_data',
    userData: true}, () =>{this.componentDidMount(e);},
  )
}       //Получение информации о пользователе         get_user_data
skladsInfo = (e) => {
  if(this.state.sklads === false) {
  this.setState({
    actionClick: 'get_delivery_sklads',
    sklads: true}, () =>{this.componentDidMount(e);},
  )

}
}         //Получение информации о складах              get_delivery_sklads
getCompany = (e) => {
  this.setState({
    company: true,
    actionClick: 'get_company'}, () =>{this.componentDidMount(e);})}         //Получение информации о компании             get_company
getMyCompanies = (e) => {
  this.setState({
    myCompanies: true,
    actionClick: 'get_my_companies'}, () =>{this.componentDidMount(e);}
  )}     //Получение списка компаний                   get_my_companies
companyAdd = (e) => {
    this.setState({
      companyEdit: true,
      newCompany: true,
      companyID: 0,
      company: true,
      actionClick: 'get_company'}, () =>{this.componentDidMount(e);})
  this.getCompany();}         //Добавление новой компании                   get_company
changeCompany = (id, name, address) => {
  this.setState({
    companySelected: id,
    companyChange: true,
    actionClick: 'change_company',
    name: name,
    lastname: '',
    addressSelect: address,
    orderTrue: false,
    countZakaz: 0,
    updateOrders: true,
    myOrderData: {}}, () =>{this.componentDidMount();},
  );
  this.userNameLastnameLoad();
} //Переключение между компаниями    change_company
companyCurrent = (e) => {
  this.setState({
    currentCompany: true,
    actionClick: 'get_current_company'}, () =>{this.componentDidMount(e);},
  );
}     //Название выбранной компании                 get_current_company
updateClick = (e) => {
  if (this.state.searchLoad === false){
      this.setState({
        isClickedSearch: true,
        actionClick: 'search_by_article',
        stateClick: true,
        about: false,
        offer: false,
        warrantly: false,
        payment: false,
        delivery: false,
        actionState: this.state.searchRequest }, () =>{this.componentDidMount(e);}
      )}
    else
    this.setState({
      isClickedSearch: true,
      actionClick: 'search_sort1',
      stateClick: true,
      about: false,
      offer: false,
      warrantly: false,
      payment: false,
      delivery: false,
      actionState: this.state.searchRequest }, () =>{this.componentDidMount(e);})}        //Поиск по артикулу и поиск Sort1             search_by_article  search_sort1
brandListShow = (e) => {
  if (typeof(this.state.selectedCity) === 'undefined') {
    this.setState({
      cityAnswerModal: !this.state.cityAnswerModal
    })
  }
  else {
  this.setState({
      selectedBrandId: '',
      selectedBrand: '',
      selectedDetailId: '',
      brandList: true,
      actionClick: 'get_brands',
      stateClick: true,
      about: false,
      offer: false,
      warrantly: false,
      payment: false,
      delivery: false,
      vinShow: false,
      arrayDataProba: {},
      actionState: this.state.searchRequest }, () =>{this.componentDidMount(e);}
  )
}
}      //Поиск по брендам                            get_brands
clickBrand  = (e) => {
  this.setState({
    selectedBrandId: e.brand_id,
    selectedBrand: e.brand,
    actionClick: 'search_by_article',
    selectedDetailId: e.detail_id}, () =>{this.componentDidMount(e);}
  );
  this.setState({
    isClickedSearch: true,
    brandList: false
  });

}        //Поиск по артикулу                           search_by_article
saveBasket = (e) => {

  this.setState({
    basketSave: true,
    actionClick: 'save_basket',
    basketSaveControl: true}, () =>{this.componentDidMount(e);},
  );
  this.setState({
    isClickedSearch: false,
    orderActiveWindow: true,
    clickBasketButton: false,
    basketClose: true,
    cityOrder: true,
    saveArrayBasket: e,
    offer: false,
    warrantly: false,
    payment: false,
    delivery: false,
    about: false})

}         //Сохранение корзины                          save_basket
basketCountFunction = (e) => {
  this.setState({
    actionClick: 'get_basket_count',
    basketCountShow2: false,
    authNeed3: true,
    basketCountShow: false},  () =>{this.componentDidMount(e); },
)
}//Количество товаров в корзине                get_basket_count
clickBasket  = (e) => {
    this.setState({
      sort1Load: true,
      basketCount: this.state.basketCount + 1,
      productInBasket: true,
      clickBasketButton: false,
      actionClick: 'save_basket_detail',
      actionState: true }, () =>{this.componentDidMount(e);}
    )
    setTimeout(() => {
      this.setState({ productInBasket: false });
    }, 1000);
}       //Добавление товара в корзину                 save_basket_detail
deleteBasketCount = (obj, e) =>{
  this.setState({
    arrayBasketNew: update(this.state.arrayBasket["basket_details"], {$splice: [[e, 1]]}),
    actionClick: 'delete_basket_detail',
    updateSort1: true,
    updateProduct: [true,true,true],
    basketCountDelete: true}, () =>{this.componentDidMount(obj);}
  )
  this.state.arrayBasketNew = update(this.state.arrayBasket["basket_details"], {$splice: [[e, 1]]});
  this.state.arrayBasket["basket_details"] = this.state.arrayBasketNew;
}//Удаление товара из корзины                delete_basket_detail
basketDelete = (e) => {
  this.setState({
    updateSort1: true,
    arrayBasket: {},
    actionClick: 'clear_basket',
    updateProduct: [true,true,true],
    basketClear: true}, () =>{this.componentDidMount(e);},
  )
}       //Очищение корзины                            clear_basket
clickBasketButton = (e) => {
  if (e === true) {
    this.setState({
      openBasket: true
    })
  }
  else {
    this.setState({
      openBasket: false
    })
  }
    this.setState({
      clickBasketButton: true,
      actionClick: 'get_basket_details'}, () =>{this.componentDidMount(e);}
    );

}  //Получение списка товаров в корзине          get_basket_details
saveOrder = (e) => {
  this.setState({
    actionClick: 'save_zakaz',
    myOrderData: {},
    getZakazData: [],
    countZakaz: 0,
    updateWithMainPage: true,
    saveOrder: true}, () =>{this.componentDidMount(e);},
  )
}          //Сохранение заказа                           save_zakaz
deleteOrder = (e) => {
  this.setState({
    actionClick: 'delete_zakaz',
    countZakaz: 0,
    deleteOrder: true}, () =>{this.componentDidMount(e);},
  )
}        //Удаление заказа                             delete_zakaz
showMyOrders = (e) => {
  this.setState({
    actionClick: 'get_zakazes',
    getZakaz: true},  () =>{this.componentDidMount(e); },
  )
}       //Получение списка заказов                    get_zakazes
getZakazDetail = (e)=> {
  Object.values(this.state.myOrderData['zakazs']).map((obj,e)=> {
    this.setState({
      actionClick: 'get_zakaz_details',
      updateWithMainPage: false,
      getZakazDetails: true},  () =>{this.componentDidMount(e,obj); },
  )
});}      //Получение информации о товаре в заказе      get_zakaz_details
getZakazStatus = (e) => {
  this.setState({
    actionClick: 'get_zakaz_statuses',
    getZakazStatuses: true}, () =>{this.componentDidMount(e);},
  )
}     //Получение списка возможных статусов заказа  get_zakaz_statuses
getZakazDetailStatus = (e) => {

  this.setState({
    actionClick: 'get_zakaz_detail_statuses',
    getZakazDetailStatuses: true}, () =>{this.componentDidMount(e);},
  )
}//Получение списка возможных статусов товара get_zakaz_detail_statuses
citySearchFunction = (e) => {
  this.setState({
    actionClick: 'get_city',
    citySearch: true},  () =>{this.componentDidMount(e); },
)
} //Поиск городов                               get_city
//Корзина
closeBasket = (e) => {
  this.setState({
    clickBasketButton: false,
    basketClose: !this.state.basketClose,
    basketTwo: false
  })
}
clickBasketButtonNull = (e) => {
    this.setState({
      clickBasketButtonNull: !this.state.clickBasketButtonNull
    } );
}
basketTwoFunction = (e) => {
  this.setState ({
    basketTwo: false
  })
}
paymentMethodsChange = (e) => {
  if (e === 1) this.yes = true;
  else if (e === 0) this.yes = false;
  else this.yes = !this.state.paymentMethods;
  this.setState({
    paymentMethods: this.yes
  })
}
zakazBack = (e) => {
  this.setState ({
    orderActiveWindow: false,
    basketClose: true
  })
}
basketCountFunctionChange = (e) => {
  if (this.state.basketCountW === true){
  this.setState({
    basketCount: this.state.basketCountV['details_count'],
    basketCountW: false})
  }
}
basketUpdateAfterOrder = (e) => {
  this.setState({
    basketCount: 0
  })
}
updateProducts = (e) => {
  this.setState({
    updateProduct: update(this.state.updateProduct,{[e]:  {$set: false}}),
  })
  this.state.updateProduct = [false,false,false];
}
//Авторизация
sessionTimeOut = (e) => {
  this.setState({
    isClickedLogout: true,
    actionState: false,
    stateClick: true,
    logoutEntrance: false,
    sessionTimeOut: true,
    orderActiveWindow: false,
    authorization: false,
    registration: false,
    activeMenu: false},  () =>{Cookies.remove('PHPSESSID')}
)
}
updateSession = (sesskeyNew) => {
    this.setState({sessionKey: sesskeyNew});
}
//Поиск
searchChange = (e) => {
  this.setState({
    searchClick: !this.state.searchClick
  })
}
searchNullFunction = (e) => {
  this.setState({
    searchClick: true,
    isClickedSearch: true,
    brandList: false
  })
}
searchKeyPress = (e) => {
  if(e.key === 'Enter'){
this.brandListShow(e);
  }
}
handleSearchChange = (searchValue) => {
 this.setState({searchRequest: searchValue.target.value});
}
clearSearchButton = (e) => {
  this.setState({
    searchRequest: ''
  })
}
//Мои заказы
updateOrder = (e) => {
  this.setState({
    updateOrders: true
  })
}
myOrderDelivery = (e) => {
  this.setState({
    clickedMyOrders: true,
    basketCountShow: true,
    basketCountShow2: true,
    authNeed3: false,
    basketCountW: true,
    getZakaz: false,
    updateOrders: false
  })
}
myOrdersWindow = (e) => {
  this.setState({myOrdersActive: true});
}
logautOrders = (e) => {
  this.setState({
  myOrdersChange: true,
  myPersonalData: false,
  basketCountShow: true,
  basketCountShow2: true,
  authNeed: true,
  authNeed2: true,
  authNeed3: true,
  basketCountW: true,
  getZakaz: false,
  });
}
myOrdersChange = (e) => {
  this.setState({
    clickedMyOrders: true
  });
}
myOrdersChangeClose = (e) => {
  this.setState({
    clickedMyOrders: false
  });
  this.mainPage(e);
}
deleteOrderStopFunction = (e) => {
  this.setState ({
    deleteOrderStop: false
  })
}
updateDates = (e) => {
  this.setState({
    updateDate: true
  })
}
updateZakazs = (e) => {
  this.setState({
    basketCountShow2: false,
    authNeed2: false,
    getZakaz: false,
  })
}
//Компании
updatefioreg = (fio) => {
    this.setState({fioreg: fio});
}
updateemailreg = (email) => {
    this.setState({emailreg: email});
}
updatephonereg = (phone) => {
    this.setState({phonereg: phone});
}
newCompanyRegistration = (e) => {
  this.setState({
    companyRegistration: true
  })
}
newCompanyRegistrationClose = (e) => {
  this.setState({
    companyRegistration: false
  })
}
changeAddress = (value) => {
  this.setState({
    addressSelect: value
  })
}
companyEditFunction = (id) => {
  this.setState({
    companyEdit: true,
    newCompany: false,
    companyID: id
  })
  this.getCompany();
}
companyEditClose = (e) => {
  this.setState({
    companyEdit: false,
    myPersonalData: true,
  })
}
companyCarsEditFunction = (id, name) => {
  this.setState({
    carsEdit: true,
    newCar: false,
    companyID: id,
    nameCar: name
  })
  this.getCompany();
}
companyCarsEditClose = (e) => {
  this.setState({
    carsEdit: false,
    myPersonalData: true,
  })
}
//Личные данные
myPersonalDataChange = (e) => {
  this.setState({
    myPersonalData: true,
    myOrdersChange: false,
    clickedMyOrders: false  });
}
myPersonalDataChangeClose = (e) => {
  this.setState({
    myPersonalData: false  });
}
userNameLastnameLoad = (e) => {
if (this.state.dataUser == true) {

if(typeof(this.state.userDataList['user'][0]['name']) != 'undefined') {
this.setState({
name: this.state.userDataList['user'][0]['name']
})}
if(typeof(this.state.userDataList['user'][0]['lastname']) != 'undefined') {
this.setState({
lastname: this.state.userDataList['user'][0]['lastname']
})}
}
else {
return (null)}
this.setState({
  dataUser: false
})
}
//Изменить пароль
myPasswordChange = (e) => {
  this.setState({
    myPassword: true,
    clickedMyOrders: false  });
}
myPasswordClose = (e) => {
  this.setState({
    myPassword: false,
  changeAccepted: false });
}
clickPasswordChange = (e) => {
  this.setState({
    changeAccepted: true });
}
//Поиск Sort1
updateSort1Arrays =(e) => {
  this.setState({
    updateSort1: false
  })
}
clickSort1 = (e) => {
  this.setState({
    updateSort1: false,
    sort1Load: false,
    searchRequestSort1: "",
    arraySort1DataProba: [],
    searchLoad: false
  })
}
//Уведомления
clickUserDataSave  = (e) => {
  if (this.state.newCompany === true){
    this.setState({
      companyID: 0
    })
  }
  this.setState({
    clickUDSave: true,
    saveCompany: true,
    actionClick: 'save_company'}, () =>{this.componentDidMount(e);}
  )
    setTimeout(() => {
      this.setState({ clickUDSave: false });
    }, 3000);
}
clickCarDataSave  = (e) => {
  this.setState({
    nameCar: e[9],
    clickUDSave: true,
    saveCompanyCar: true,
    actionClick: 'save_company_car'}, () =>{this.componentDidMount(e);}
  )
    setTimeout(() => {
      this.setState({ clickUDSave: false });
    }, 3000);
}
carAdd = (e, id) => {
  this.setState({
    companyID: id,
    carsEdit: true,
    newCar: true,
    actionClick: 'get_company_cars'}, () =>{this.componentDidMount(e);}
  )
this.getCompany();
}
companyDelete  = (e) => {
  this.setState({
    deleteCompany: true,
    actionClick: 'delete_company'}, () =>{this.componentDidMount(e);}
  )
}
companyDeleteCar  = (e) => {
  this.setState({
    deleteCompanyCar: true,
    actionClick: 'delete_company_car'}, () =>{this.componentDidMount(e);}
  )
}
getCars = (e) => {
  this.state.arrayMyCompanies['clients'].map((obj,e)=> {
    this.setState({
      actionClick: 'get_company_cars',
      myCars: true},  () =>{this.componentDidMount(e,obj); },
  )
  });
}
getAutoMarks = (e) => {
    this.setState({
      actionClick: 'get_auto_makers',
      autoMarks: true},  () =>{this.componentDidMount(e); },
  )
}
clickRegistration  = (e) => {
    this.setState({
      clickReg: true
    }
    )
    setTimeout(() => {
      this.setState({ clickReg: false });
    }, 3000);
}
clickEntrance  = (e) => {
    this.setState({
      clickEnt: true
    }
    )
    setTimeout(() => {
      this.setState({ clickEnt: false });
    }, 3000);
}
clickError  = (e) => {
    this.setState({
      clickErr: true
    })
    setTimeout(() => {
      this.setState({ clickErr: false });
    }, 3000);
}
//Закрытие модальных окон при клике
componentWillUnmount() {
  document.removeEventListener('click', this.handleClickOutside, false);
}
UNSAFE_componentWillMount() {
  document.addEventListener('click', this.handleClickOutside, false);
}
handleClickOutside = (e) => {
  const input1 = document.querySelector('.search_field');
  const input2 = document.querySelector('.searchFieldHeader');
  const basketButton = document.getElementById('basket');
  const basket = document.getElementById('basketModal');
  const basketButtonNull = document.getElementById('sign-in-modal');
  const basketNull = document.querySelector('#basketNull');

  if (!e.path.includes(basketButton) && !e.path.includes(basket) && !e.path.includes(basketButtonNull) && !e.path.includes(basketNull))
  this.setState({
    basketClose: true,
    clickBasketButtonNull: false
  })
  if (e.path.includes(basketButtonNull) && input1 !== null) input1.focus();
  else if (e.path.includes(basketButtonNull) && input2 !== null) input2.focus();
}

componentDidMount(e, obj) {
if (this.state.actionClick==='search_by_article' || this.state.actionClick==='get_brands' || this.state.actionClick==='search_sort1'){
  fetch(this.state.api,{
     method: 'POST',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
       "sesskey": this.state.sessionKey,
       "action": this.state.actionClick,
       "article":this.state.actionState,
       "detail_id":this.state.selectedDetailId,
       "brand_id":this.state.selectedBrandId,
       "request_id": this.state.searchRequestSort1,
       "filter_text": "",
       "brand":this.state.selectedBrand,
      }
      )
   })
  .then(res => res.json())
  .then(
   (result) => {
     this.setState({
       isLoaded: true,
       items: result,
       arrayData: Object.values(result),
       arrayDataProba: result,
     },)
    if(result['status'] === 'err' ){
      this.logoutClick();
    }
    if((this.state.actionClick==='search_by_article' && this.state.searchLoad === false) || (this.state.actionClick==='search_sort1'  && typeof(result["searchstatus"]) === "undefined")) {
      if (this.state.actionClick==='search_by_article' && this.state.searchLoad === false){
      this.setState({
        actionClick: 'search_sort1',
        searchLoad: true
      })
      }
      else {
        this.setState({
          searchRequestSort1: result["reqid"],
        })
        if (result["items"] !== ""){
          this.setState({
            arraySort1DataProba: this.state.arraySort1DataProba.concat(result["items"]),
            updateSort1: true,
            searchLoad: true
          })
        }
      }
      setTimeout(this.updateClick(), 2000);
    }
    if (typeof(result["searchstatus"]) !== "undefined") {
      this.setState({
        sort1Load: true,
        updateSort1: true,
        searchLoad: false,
      })
    }
    },

   (error) => {
     this.setState({
       isLoaded: true,
       error
     });
   }
  )
  .catch(alert)
  }
else if (this.state.clickBasketButton === true && this.state.actionClick==='get_basket_details'){
  fetch(this.state.api,{
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      "sesskey": this.state.sessionKey,
      "action": this.state.actionClick
     }
     )
  })
.then(res => res.json(),
)
.then(
  (result) => {
    this.setState({
      isLoaded: true,
      items: result,
      arrayBasket: result,
      clickBasketButton: false,
      basketTwo: true,
      basketCount: result["basket_details"].length
    });
    if (this.state.openBasket === true) {
      this.setState({
        basketClose: !this.state.basketClose,
      })
    }
    if(result['status'] === 'err' ){
      this.logoutClick();
    }
   },

  (error) => {
    this.setState({
      isLoaded: true,
      error
    }, );
  }
)
.catch(alert)
}
else if (this.state.isClickedLogout === true && this.state.actionClick==='logout'){
  fetch(this.state.api,{
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      "sesskey": this.state.sessionKey,
      "action": this.state.actionClick
     }
     )
  })
.then(res => res.json(),
)
.then(
  (result) => {
    this.setState({
      isLoaded: true,
      items: result,
            isClickedLogout: true
    });
   },

  (error) => {
    this.setState({
      isLoaded: true,
      error
    }, );
  }
)
.catch(alert)
}
else if (this.state.productInBasket === true && this.state.actionClick==='save_basket_detail'){

fetch(this.state.api,{

   method: 'POST',
   headers: {'Content-Type':'application/json'},
   body: JSON.stringify({
     "sesskey": this.state.sessionKey,
       "action": this.state.actionClick,
       "article": e.article,
       "attention": "",
       "brand": e.brand,
       "brand_id": e.brand_id,
       "chance": e.chance,
       "city_id": e.city_id,
       "city_name": e.city_name,
       "comment": "",
       "cost": e.sale_price,
       "cost_sum": e.sale_price,
       "count": e.count,
       "deliverer": e.deliverer,
       "deliverer_id": e.deliverer_id,
       "deliverer_type": e.deliverer_type,
       "detail_id": e.detail_id,
       "item_index": this.state.basketCount,
       "mcount": e.mcount,
       "name": e.name,
       "price": e.price,
       "prim": e.prim,
       "stock": e.stock,
       "time": e.time,
       'sort1_id': e.id,
       "sort1_sreqid": this.state.searchRequestSort1,
       'img': e.img,
       'deliverer_online_profile_id': e.deliverer_online_profile_id,
       "to_cart_count": 1,
       'multiplicity': e.multiplicity,
       'return': e.return,
       "detail_url": e.detail_url,
       "prim": "",
    }
    )
 })

 .then(res => res.json())
 .then(
   (result) => {
     this.setState({
       isLoaded: true,
       items: result
     });
     if(result['status'] === 'err' ){
       this.logoutClick();
     }
         },

   (error) => {
     this.setState({
       isLoaded: true,
       error
     });
   }
 )
 .catch(alert)

}
else if (this.state.userData === true && this.state.actionClick==='get_user_data'){

fetch(this.state.api,{

   method: 'POST',
   headers: {'Content-Type':'application/json'},
   body: JSON.stringify({
     "sesskey": this.state.sessionKey,
       "action": this.state.actionClick
    }
    )
 })

 .then(res => res.json())
 .then(
   (result) => {
     this.setState({
       isLoaded: true,
       userDataList: result,
       userData: true,
       dataButton: true,
       companyID: result["user"][0].company_id
     });
     if(result['status'] === 'err' ){
       this.logoutClick();
     }
     this.getCompany();
         },

   (error) => {
     this.setState({
       isLoaded: true,
       error
     });
   }
 )
 .catch(alert)

}
else if (this.state.company === true && this.state.actionClick==='get_company'){

fetch(this.state.api,{

   method: 'POST',
   headers: {'Content-Type':'application/json'},
   body: JSON.stringify({
     "sesskey": this.state.sessionKey,
       "action": this.state.actionClick,
       "company_id": this.state.companyID
    }
    )
 })

 .then(res => res.json())
 .then(
   (result) => {
     this.setState({
       isLoaded: true,
       arrayCompany: result,
     });
     if(result['status'] === 'err' ){
       this.logoutClick();
     }
     this.getMyCompanies();
         },

   (error) => {
     this.setState({
       isLoaded: true,
       error
     });
   }
 )
 .catch(alert)

}
else if (this.state.saveCompany === true && this.state.actionClick==='save_company'){

fetch(this.state.api,{

   method: 'POST',
   headers: {'Content-Type':'application/json'},
   body: JSON.stringify({
     "sesskey": this.state.sessionKey,
     "action": this.state.actionClick,
     "company_id": this.state.companyID,
     "okopf": e[0],
     "btype": e[1],
     "tax_type": e[2],
     "company_name": e[3],
     "inn": e[4],
     "kpp": e[5],
     "address": e[6],
     "ogrn": e[7],
     "okpo": e[8],
     "okved": e[9],
     "ruk": e[10],
     "rukdol": e[11],
     "buh": e[12],
     "buhdol": e[13],
     "mphone": e[14],
     "email": e[15],
    }
    )
 })

 .then(res => res.json())
 .then(
   (result) => {
     this.setState({
       isLoaded: true,
     });
     if(result['status'] === 'err' ){
       this.logoutClick();
     }
     this.getMyCompanies();
         },

   (error) => {
     this.setState({
       isLoaded: true,
       error
     });
   }
 )
 .catch(alert)

}
else if (this.state.saveCompanyCar === true && this.state.actionClick==='save_company_car'){

fetch(this.state.api,{

   method: 'POST',
   headers: {'Content-Type':'application/json'},
   body: JSON.stringify({
     "sesskey": this.state.sessionKey,
     "action": this.state.actionClick,
     "company_id": this.state.companyID,
     "auto_maker_id": e[0],
     "auto_model": e[1],
     "vin": e[2],
     "auto_gov_num": e[3],
     "auto_doc_num": e[4],
     "engine_num": e[5],
     "made_year": e[6],
     "probeg": e[7],
     "company_car_id": e[8]
    }
    )
 })

 .then(res => res.json())
 .then(
   (result) => {
     this.setState({
       isLoaded: true,
     });
     if(result['status'] === 'err' ){
       this.logoutClick();
     }
     this.getMyCompanies();
         },

   (error) => {
     this.setState({
       isLoaded: true,
       error
     });
   }
 )
 .catch(alert)

}
else if (this.state.deleteCompany === true && this.state.actionClick==='delete_company'){

fetch(this.state.api,{

   method: 'POST',
   headers: {'Content-Type':'application/json'},
   body: JSON.stringify({
     "sesskey": this.state.sessionKey,
     "action": this.state.actionClick,
     "company_car_id": e,
    }
    )
 })

 .then(res => res.json())
 .then(
   (result) => {
     this.setState({
       isLoaded: true,
     });
     if(result['status'] === 'err' ){
       this.logoutClick();
     }
     this.getMyCompanies();
         },

   (error) => {
     this.setState({
       isLoaded: true,
       error
     });
   }
 )
 .catch(alert)
}
else if (this.state.deleteCompanyCar === true && this.state.actionClick==='delete_company_car'){

fetch(this.state.api,{

   method: 'POST',
   headers: {'Content-Type':'application/json'},
   body: JSON.stringify({
     "sesskey": this.state.sessionKey,
     "action": this.state.actionClick,
     "company_car_id": e,
    }
    )
 })

 .then(res => res.json())
 .then(
   (result) => {
     this.setState({
       isLoaded: true,
     });
     if(result['status'] === 'err' ){
       this.logoutClick();
     }
     this.getMyCompanies();
         },

   (error) => {
     this.setState({
       isLoaded: true,
       error
     });
   }
 )
 .catch(alert)
}
else if (this.state.sklads === true && this.state.actionClick==='get_delivery_sklads'){

fetch(this.state.api,{

   method: 'POST',
   headers: {'Content-Type':'application/json'},
   body: JSON.stringify({
     "sesskey": this.state.sessionKey,
       "action": this.state.actionClick
    }
    )
 })

 .then(res => res.json())
 .then(
   (result) => {
     this.setState({
       isLoaded: true,
       arraySkladDeliveries: result
     });
     if(result['status'] === 'err' ){
       this.logoutClick();
     }

         },

   (error) => {
     this.setState({
       isLoaded: true,
       error
     });
   }
 )
 .catch(alert)

}
else if (this.state.myCompanies === true && this.state.actionClick==='get_my_companies'){

fetch(this.state.api,{
   method: 'POST',
   headers: {'Content-Type':'application/json'},
   body: JSON.stringify({
     "sesskey": this.state.sessionKey,
       "action": this.state.actionClick,
    }
    )
 })

 .then(res => res.json())
 .then(
   (result) => {
     this.setState({
       isLoaded: true,
       arrayMyCompanies: result,
     });
     if(result['status'] === 'err' ){
       this.logoutClick();
     }
     if (typeof(result['clients']) !== 'undefined') {
     let select = []
      select = Object.values(result['clients']).map((obj, e) => {
        if (obj.type === '3') {
          this.setState({
          //  companySelected: obj.id,
            idFizLizo: obj.id
          })
        }
      });
    }
    this.getCars();
         },
   (error) => {
     this.setState({
       isLoaded: true,
       error
     });
   }
 )
 .catch(alert)

}
else if (this.state.myCars === true && this.state.actionClick==='get_company_cars'){

fetch(this.state.api,{
   method: 'POST',
   headers: {'Content-Type':'application/json'},
   body: JSON.stringify({
     "sesskey": this.state.sessionKey,
       "action": this.state.actionClick,
       "company_id": obj.id
    }
    )
 })

 .then(res => res.json())
 .then(
   (result) => {
     this.setState({
       isLoaded: true,
       arrayMyCars: update(this.state.arrayMyCars, {[e]:  {$set:  result['company_cars']}}),
     });
     this.state.arrayMyCars[e] = result['company_cars'];
     if(result['status'] === 'err' ){
       this.logoutClick();
     }
         },
   (error) => {
     this.setState({
       isLoaded: true,
       error
     });
   }
 )
 .catch(alert)

}
else if (this.state.basketCountShow === false && this.state.actionClick==='get_basket_count') {

  fetch(this.state.api,{
     method: 'POST',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
       "sesskey": this.state.sessionKey,
         "action": this.state.actionClick
      }
      )
   })

   .then(res => res.json())
   .then(
     (result) => {
       this.setState({
         isLoaded: true,
         items: result,
         basketCountV: result,
         basketCountShow: false,
         openBasket: false
       });
       this.userDataInfo();
       this.skladsInfo();
       this.companyCurrent();
       this.getZakazStatus();
       this.getZakazDetailStatus();
       this.getAutoMarks();
       this.clickBasketButton(false);

       if(result['status'] === 'err' ){
         this.logoutClick();
       }
           },

     (error) => {
       this.setState({
         isLoaded: true,
         error
       });
     }
   )
   .catch(alert)


}
else if (this.state.authNeed === false && this.state.actionClick==='user_login') {
  fetch(this.state.api,{

     method: 'POST',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
       "sesskey": this.state.sessionKey,
         "action": this.state.actionClick

      }
      )
   })

   .then(res => res.json())
   .then(
     (result) => {
       this.setState({
         isLoaded: true,
         items: result,
         authNeed: false,
         auth: result
       }, );
       if(result['status'] === 'err' ){
         this.logoutClick();
       }
           },

     (error) => {
       this.setState({
         isLoaded: true,
         error
       });
     }
   )
   .catch(alert)


}
else if (this.state.basketCountDelete === true && this.state.actionClick==='delete_basket_detail') {
  fetch(this.state.api,{

     method: 'POST',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
       "sesskey": this.state.sessionKey,
       "action": this.state.actionClick,
       "basket_id": e.basket_id,
       "id": e.id
      }
      )
   })

   .then(res => res.json())
   .then(
     (result) => {
       this.setState({
         isLoaded: true,
         items: result,
         basketCount: this.state.basketCount -1
       })

       if(result['status'] === 'err' ){
         this.logoutClick();
       }
           },

     (error) => {
       this.setState({
         isLoaded: true,
         error
       });
     }
   )
   .catch(alert)


}
else if (this.state.basketClear === true && this.state.actionClick==='clear_basket') {
  fetch(this.state.api,{

     method: 'POST',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
       "sesskey": this.state.sessionKey,
       "action": this.state.actionClick,
       "basket_id": e.basket_id,
       "id": e.basket_details[0].detail_id,
      }
      )
   })

   .then(res => res.json())
   .then(
     (result) => {
       this.setState({
         isLoaded: true,
         items: result,
         basketCount: 0,
         basketTwo: true,
       })
       if(result['status'] === 'err' ){
         this.logoutClick();
       }
      this.clickBasketButtonNull();
           },

     (error) => {
       this.setState({
         isLoaded: true,
         error
       });
     }
   )
   .catch(alert)
}
else if (this.state.basketSaveControl === true && this.state.actionClick==='save_basket') {
  fetch(this.state.api,{

     method: 'POST',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
       "sesskey": this.state.sessionKey,
       "action": this.state.actionClick,
       "basket_details": e
      }
      )
   })

   .then(res => res.json())
   .then(
     (result) => {
       this.setState({
         isLoaded: true,
         items: result
       })
       if(result['status'] === 'err' ){
         this.logoutClick();
       }
           },

     (error) => {
       this.setState({
         isLoaded: true,
         error
       });
     }
   )
   .catch(alert)


}
else if (this.state.saveOrder === true && this.state.actionClick ==='save_zakaz') {
  fetch(this.state.api,{

     method: 'POST',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
       "sesskey": this.state.sessionKey,
       "action": this.state.actionClick,
       "delivery_address": this.state.addressSelect,
       "company_dogovor_id": "18",
       "company_id": this.state.companyID,
       "delivery_type": e.delivery_type,
       "delivery_type_id": "9",
       "details": e.details,
       "id": 0,
       "payment_type": e.payment_type
      }
      )
   })

   .then(res => res.json())
   .then(
     (result) => {
       this.setState({
         isLoaded: true,
         items: result
       })
       if(result['status'] === 'err' ){
         this.logoutClick();
       }
           },

     (error) => {
       this.setState({
         isLoaded: true,
         error
       });
     }
   )
   .catch(alert)


  }
else if (this.state.deleteOrder === true && this.state.actionClick ==='delete_zakaz') {
    fetch(this.state.api,{

       method: 'POST',
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify({
         "sesskey": this.state.sessionKey,
         "action": this.state.actionClick,
         "zakaz_id": e
        }
        )
     })

     .then(res => res.json())
     .then(
       (result) => {
         this.setState({
           isLoaded: true,
           items: result
         })
         if(result['status'] === 'err' ){
           this.logoutClick();
         }
         this.showMyOrders(e);
             },

       (error) => {
         this.setState({
           isLoaded: true,
           error
         });
       }
     )
     .catch(alert)


}
else if (this.state.citySearch === true && this.state.actionClick ==='get_city') {
    fetch(this.state.api,{

       method: 'POST',
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify({
         "sesskey": this.state.sessionKey,
         "action": this.state.actionClick,
         "city_name": this.state.cityInput
        }
        )
     })

     .then(res => res.json())
     .then(
       (result) => {
         this.setState({
           isLoaded: true,
           items: result,
           cityArray: result
         })
         if(result['status'] === 'err' ){
           this.logoutClick();
         }
             },

       (error) => {
         this.setState({
           isLoaded: true,
           error
         });
       }
     )
     .catch(alert)


    }
else if (this.state.getZakaz === true && this.state.actionClick ==='get_zakazes') {
      fetch(this.state.api,{
         method: 'POST',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify({
           "sesskey": this.state.sessionKey,
           "action": this.state.actionClick
          }
          )
       })
       .then(res => res.json())
       .then(
         (result) => {
           this.setState({
             isLoaded: true,
             items: result,
             myOrderData: result,
             getZakaz: true,
             getZakazDetails: false,
             updateOrders: true,
             updateDate: false
           })
           if(result['status'] === 'err' ){
             this.logoutClick();
           }
               },

         (error) => {
           this.setState({
             isLoaded: true,
             error
           });
         }
       )
       .catch(alert)


      }
else if (this.state.getZakazDetails === true && this.state.actionClick ==='get_zakaz_details') {
  fetch(this.state.api,{

     method: 'POST',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
       "sesskey": this.state.sessionKey,
       "action": this.state.actionClick,
       "page": 1,
       "search": "",
       "zakaz_id": obj.id
      }
      )
   })
   .then(res => res.json())
   .then(
     (result) => {
       this.setState({
         isLoaded: true,
         items: result,
         getZakazData: update(this.state.getZakazData, {[e]:  {$set:  result}}),
         getZakazDetails: true,
         countZakaz: this.state.countZakaz + 1,
       })
       this.state.getZakazData[e] = result;
       if(result['status'] === 'err' ){
         this.logoutClick();
       }
       if (this.state.countZakaz === Object.values(this.state.myOrderData['zakazs']).length)
       this.setState({
         orderTrue: true,
         updateOrders: false,
         deleteOrderStop: true
       })
           },

     (error) => {
       this.setState({
         isLoaded: true,
         error
       });
     }
   )
   .catch(alert)


  }
else if (this.state.getZakazStatuses === true && this.state.actionClick ==='get_zakaz_statuses') {
   fetch(this.state.api,{

       method: 'POST',
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify({
         "sesskey": this.state.sessionKey,
         "action": this.state.actionClick,
        }
        )
     })
     .then(res => res.json())
     .then(
       (result) => {
         this.setState({
           isLoaded: true,
           items: result,
           arrayZakazStatus: result

         })
         if(result['status'] === 'err' ){
           this.logoutClick();
         }
             },

       (error) => {
         this.setState({
           isLoaded: true,
           error
         });
       }
     )
     .catch(alert)
}
else if (this.state.autoMarks === true && this.state.actionClick ==='get_auto_makers') {
   fetch(this.state.api,{

       method: 'POST',
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify({
         "sesskey": this.state.sessionKey,
         "action": this.state.actionClick,
        }
        )
     })
     .then(res => res.json())
     .then(
       (result) => {
         this.setState({
           isLoaded: true,
           items: result,
           arrayCarsMarks: result

         })
         if(result['status'] === 'err' ){
           this.logoutClick();
         }
             },

       (error) => {
         this.setState({
           isLoaded: true,
           error
         });
       }
     )
     .catch(alert)
}
else if (this.state.companyChange === true && this.state.actionClick==='change_company'){

  fetch(this.state.api,{
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      "sesskey": this.state.sessionKey,
      "action": this.state.actionClick,
      "company_id": this.state.companySelected
     }
     )
  })
.then(res => res.json(),
)
.then(
  (result) => {
    this.setState({
      isLoaded: true,
      items: result,
    })
    this.basketCountFunction();
    this.updateZakazs();
   },

  (error) => {
    this.setState({
      isLoaded: true,
      error
    }, );
  }
)
.catch(alert)
}
else if (this.state.currentCompany === true && this.state.actionClick==='get_current_company'){

  fetch(this.state.api,{
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      "sesskey": this.state.sessionKey,
      "action": this.state.actionClick
     }
     )
  })
.then(res => res.json(),
)
.then(
  (result) => {
    this.setState({
      isLoaded: true,
      items: result,
    //  companyCurrent: result,
      companyID: result['current_company'].id,
      name: result['current_company'].name,
      lastname: '',
      addressSelect: result['current_company'].address,
      companySelected: result['current_company'].id

    });
  //  alert(this.state.companyCurrent['current_company'].id);

   },

  (error) => {
    this.setState({
      isLoaded: true,
      error
    }, );
  }
)
.catch(alert)

//alert(Object.values(this.state.companyCurrent['companyCurrent']));

}
else if (this.state.registrationNew === true && this.state.actionClick==='register_user'){

  fetch(this.state.api,{
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      "sesskey": this.state.sessionKey,
      "action": this.state.actionClick
     }
     )
  })
.then(res => res.json(),
)
.then(
  (result) => {
    this.setState({
      isLoaded: true,
      items: result,
      registration: false,
      errorReg: false
    });
   },

  (error) => {
    this.setState({
      isLoaded: true,
      errorReg: true,
      error
    }, );
  }
)
.catch(alert)
}
else if (this.state.getZakazDetailStatuses === true && this.state.actionClick ==='get_zakaz_detail_statuses') {
   fetch(this.state.api,{

       method: 'POST',
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify({
         "sesskey": this.state.sessionKey,
         "action": this.state.actionClick,
        }
        )
     })
     .then(res => res.json())
     .then(
       (result) => {
         this.setState({
           isLoaded: true,
           items: result,
           arrayZakazDetailStatus: result

         })
         if(result['status'] === 'err' ){
           this.logoutClick();
         }
             },

       (error) => {
         this.setState({
           isLoaded: true,
           error
         });
       }
     )
     .catch(alert)
}
else { if(this.state.actionState.length !== 0 && this.state.actionState !== false){
      fetch(this.state.api,{

         method: 'POST',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify({
           "sesskey": this.state.sessionKey,
           "action": 'search_sort1',
           "article":this.state.actionState
          }
          )
       })
       .then(res => res.json())
       .then(
         (result) => {
           this.setState({
             isLoaded: true,
             items: result,
           });
           if(result['status'] === 'err' ){
             this.logoutClick();
           }
               },

         (error) => {
           this.setState({
             isLoaded: true,
             error
           });
         }
       )
       .catch(alert)

     }
   }
}

render(){
    return(

    <div className="wrapper" >
    {(this.state.authNeed === true && this.state.authNeed2 === true && this.state.authNeed3 === true) ?(this.authNeedFunction()):(null)}

    {(this.state.auth['status'] === 'ok' && this.state.basketCountShow === true && this.state.basketCountShow2 === true && this.state.authNeed3 === false)?(this.basketCountFunction()):(null)}
    {(this.state.auth['status'] === 'err' && this.state.sessionTimeOut === false)?(this.sessionTimeOut()):(null)}

    {(typeof(this.state.basketCountV['details_count']) !== 'undefined')?(this.basketCountFunctionChange()):(null)}
    {(this.state.auth['status'] === 'ok' && this.state.getZakaz === false && (this.state.clickedMyOrders === true || this.state.updateWithMainPage === true) && this.state.basketCountShow2 === false && this.state.authNeed2 === false)?(this.showMyOrders()):(null)}
    {(typeof(this.state.myOrderData['zakazs']) !== 'undefined' && this.state.getZakaz === true &&  this.state.getZakazDetails === false)?(this.getZakazDetail()):(null)}

    {(this.state.productInBasket)?(  <div className ="fullAutoProducts">
        <div id="notification">
        <span  id ="sort1AnswerClose" onClick={this.props.sort1ClickBasketClose}>&#10006;</span>
        <p id ="answerSort1"><strong>Ваш товар добавлен в корзину</strong></p>

        </div>
        </div>) : (null)}
    {(this.state.clickReg === true && this.state.errorReg === false)?(<div id="productInBasket"><p>Пароль был выслан Вам на почту</p> </div>) : (null)}
    {(this.state.clickEnt)?(<div id="productInBasket"><p>Добро пожаловать!</p> </div>) : (null)}
    {(this.state.clickUDSave)?(<div id="productInBasket"><p>Данные успешно сохранены</p> </div>) : (null)}
    {(this.state.clickErr)?(<div id="productInBasket"><p>Неверный логин или пароль</p> </div>) : (null)}
    {(this.state.companyRegistration === true)?(<MyRegistration fioreg={this.state.fioreg} emailreg={this.state.emailreg} phonereg={this.state.phonereg} companyRegistration={this.companyRegistration} newCompanyRegistrationClose={this.newCompanyRegistrationClose} newCompanyRegistration={this.newCompanyRegistration} />):(null)}
    {(this.state.dataButton)?(this.userNameLastnameLoad()):(null)}

        <div className="hc">
            <div className="header">
                <div id="header">
                    <div className="logo">
                        <div className="header_menu">
                            <div className="right_menu">
                              <Head orderActiveWindow={this.state.orderActiveWindow} clickBasketButtonNull={this.clickBasketButtonNull} clickBasketButton={this.clickBasketButton}  basketCount={this.state.basketCount} about = {this.state.about} delivery = {this.state.delivery} payment = {this.state.payment} warrantly = {this.state.warrantly} offer = {this.state.offer} mainPage = {this.state.mainPage} mainPage={this.mainPage}/>

                            {(this.state.orderActiveWindow === false)?(<EntranceLoginModal updatefioreg={this.updatefioreg} updateemailreg={this.updateemailreg}  updatephonereg={this.updatephonereg} newCompanyRegistration={this.newCompanyRegistration} companyRegistration={this.state.companyRegistration} changeCompany={this.changeCompany} companySelected={this.state.companySelected} arrayMyCompanies={this.state.arrayMyCompanies} name={this.state.name}  lastname={this.state.lastname} myPasswordChange={this.myPasswordChange} clickError={this.clickError} clickEntrance={this.clickEntrance} clickRegistration={this.clickRegistration} api={this.state.api} logautOrders={this.logautOrders} updateSession={this.updateSession}  myPersonalDataChange={this.myPersonalDataChange} myOrdersChange={this.myOrdersChange} myOrdersWindow={this.myOrdersWindow} sessionKey={this.state.sessionKey} logoutClick={this.logoutClick} logoutEntrance={this.state.logoutEntrance} myOrdersActive={this.state.myOrdersActive}/>):(null)}

                            {(this.state.clickBasketButtonNull)?(<BasketModalNull clickBasketButtonNull={this.clickBasketButtonNull}/> ):(null)}
                            {(this.state.basketCount > 0 &&  this.state.basketClose === false)?( <BasketModal  basketDelete={this.basketDelete} basketCount = {this.state.basketCount} basketTwoFunction={this.basketTwoFunction} basketTwo={this.state.basketTwo} saveBasket={this.saveBasket} deleteBasketCount={this.deleteBasketCount} closeBasket={this.closeBasket} arrayBasket={this.state.arrayBasket} />):(null)}

                              <CityHeader cityAnswerModalClose={this.cityAnswerModalClose} cityAnswerModal={this.state.cityAnswerModal} nullCity={this.nullCity} cityArray={this.state.cityArray} citySearchChange={this.citySearchChange} cityInput={this.state.cityInput} orderActiveWindow={this.state.orderActiveWindow} updateStreet={this.updateStreet} updateCity={this.updateCity} selectedStreet={this.state.selectedStreet} selectedCity={this.state.selectedCity}/>


                            </div>
                        </div>
                    </div>
                </div>

                {/*  <CityModal updateCity=/> */}
          </div>

          <div className="body">

          {(this.state.orderActiveWindow === true)?(<OrderCheckOut arrayCompany={this.state.arrayCompany} changeAddress={this.changeAddress} addressSelect={this.state.addressSelect} arraySkladDeliveries={this.state.arraySkladDeliveries} basketUpdateAfterOrder={this.basketUpdateAfterOrder} zakazBack={this.zakazBack} userDataList={this.state.userDataList} userData={this.state.userData} userDataInfo={this.userDataInfo} saveOrder={this.saveOrder} myOrderDelivery={this.myOrderDelivery} mainPage={this.mainPage} saveArrayBasket={this.state.saveArrayBasket} paymentMethodsChange={this.paymentMethodsChange} paymentMethods={this.state.paymentMethods}   cityOrder={this.state.cityOrder} orderCityButton={this.state.orderCityButton} cityAnswerModalClose={this.cityAnswerModalClose} cityAnswerModal={this.state.cityAnswerModal} nullCity={this.nullCity} cityArray={this.state.cityArray} citySearchChange={this.citySearchChange} cityInput={this.state.cityInput} orderActiveWindow={this.state.orderActiveWindow}  updateCity={this.updateCity} selectedCity={this.state.selectedCity}/>):(null)}
                          {(this.state.myPersonalData)?(<PersonalData companyDeleteCar={this.companyDeleteCar} carAdd={this.carAdd} companyCarsEditFunction={this.companyCarsEditFunction} arrayMyCars={this.state.arrayMyCars} companyDelete={this.companyDelete} companyID={this.state.companyID} companyAdd={this.companyAdd} companyEditFunction={this.companyEditFunction} arrayMyCompanies={this.state.arrayMyCompanies} clickUserDataSave={this.clickUserDataSave} userDataList={this.state.userDataList['user'][0]} userData={this.state.userData} userDataInfo={this.userDataInfo} myPersonalData={this.state.myPersonalData} myPersonalDataChangeClose={this.myPersonalDataChangeClose}/>):(null)}
                            {(this.state.companyEdit)?(<MyCompany companyID={this.state.companyID} newCompany={this.state.newCompany} companyEditFunction={this.companyEditFunction} companyEditClose = {this.companyEditClose} arrayMyCompanies={this.state.arrayMyCompanies} clickUserDataSave={this.clickUserDataSave} myPersonalDataChangeClose={this.myPersonalDataChangeClose}/>):(null)}
                              {(this.state.carsEdit)?(<MyAuto clickCarDataSave={this.clickCarDataSave} nameCar={this.state.nameCar} arrayCarsMarks={this.state.arrayCarsMarks} arrayMyCars={this.state.arrayMyCars} companyID={this.state.companyID} newCar={this.state.newCar} companyCarsEditFunction={this.companyCarsEditFunction} companyCarsEditClose = {this.companyCarsEditClose} arrayMyCompanies={this.state.arrayMyCompanies} myPersonalDataChangeClose={this.myPersonalDataChangeClose}/>):(null)}
                          <MyOrders updateDates ={this.updateDates} updateDate={this.state.updateDate} updateOrders={this.state.updateOrders} arrayCompany={this.state.arrayCompany} deleteOrderStop={this.state.deleteOrderStop} deleteOrderStopFunction={this.deleteOrderStopFunction} orderTrue={this.state.orderTrue} deleteOrder={this.deleteOrder} arrayZakazStatus={this.state.arrayZakazStatus} arrayZakazDetailStatus = {this.state.arrayZakazDetailStatus} updateOrder = {this.updateOrder} updateOrders={this.state.updateOrders} countZakaz={this.state.countZakaz} getZakazData={this.state.getZakazData} getZakazDetail={this.getZakazDetail} myOrderData={this.state.myOrderData} clickedMyOrders={this.state.clickedMyOrders} myOrdersChangeClose={this.myOrdersChangeClose}/>
                          {(this.state.myPassword === true)?(<MyPassword clickPasswordChange={this.clickPasswordChange} changeAccepted={this.state.changeAccepted} myPasswordClose={this.myPasswordClose} myPassword={this.state.myPassword} myPasswordChange={this.myPasswordChange} />):(null)}
                        {(this.state.orderActiveWindow === false)?(<Search updateProducts ={this.updateProducts} updateProduct={this.state.updateProduct} arrayBasket={this.state.arrayBasket} clearSearchButton={this.clearSearchButton} clickSort1={this.clickSort1} updateSort1Arrays={this.updateSort1Arrays} updateSort1={this.state.updateSort1} sort1Load={this.state.sort1Load} arraySort1DataProba={this.state.arraySort1DataProba} searchNullFunction={this.searchNullFunction} searchClick={this.state.searchClick} searchChange= {this.searchChange}brandsNull={this.state.brandsNull} searchRequest={this.state.searchRequest} searchKeyPress={this.searchKeyPress} vinShow={this.state.vinShow} clickBrand ={this.clickBrand} brandListShow={this.brandListShow} brandList={this.state.brandList} arrayDataProba={this.state.arrayDataProba} clickBasket={this.clickBasket} mainPage={this.state.mainPage} isClickedSearch={this.state.isClickedSearch} searchRequest={this.state.searchRequest} updateClick={this.updateClick}  handleSearchChange={this.handleSearchChange} isClickedSearch={this.state.isClickedSearch} stateClick={this.state.stateClick} actionClick={this.state.actionClick} actionState={this.state.actionState}/>):(null)}

          {(this.state.about === true)?(<About />):(null)}
          {(this.state.delivery === true)?(<Delivery />):(null)}
          {(this.state.warrantly === true)?(<Warranty />):(null)}
          {(this.state.payment === true)?(<Payment />):(null)}
          {(this.state.offer === true)?(<Offer />):(null)}
          {(this.state.mainPage === true)?(<Opr />):(null)}
          {/*  <Rotute otherPages={this.otherPages}/>*/}
      </div>
      </div>
      <div>

        <Footer aboutPage={this.aboutPage} deliveryPage = {this.deliveryPage} paymentPage = {this.paymentPage} warrantlyPage = {this.warrantlyPage} offerPage = {this.offerPage} about = {this.state.about} delivery = {this.state.delivery} payment = {this.state.payment} warrantly = {this.state.warrantly} offer = {this.state.offer} mainPage={this.state.mainPage} />
      </div>
  </div>

  )
}
}

const modalRoot = document.getElementById('modal-root');

class About extends React.Component{
  render(){
    return(
      <div>
        <div> </div>
        <div className="description" ><h2>О нас</h2>
          <p>ВашСайт.ru — это интернет платформа объединяющая магазины автозапчастей, присутствующая в более чем 40 городах европейской части России. Магазины предлагают широкий выбор автозапчастей, аксессуаров и других, необходимых для автовладельцев товаров.<br/>
        Во всех магазинах сети представлено более 12 000 наименований товаров высокого качества.<br/>
        В более чем 80 магазинах сети работают отделы по продаже запчастей для иномарок. Всегда в наличии наиболее востребованный ассортимент, а также есть возможность заказать любые запчасти.<br/>
        Магазины осуществляют реализацию товаров за наличный и безналичный расчет физическим и юридическим лицам.</p></div>
      </div>
    )
  }
}
class Delivery extends React.Component{
  render(){
    return(
      <div>

          <div className="description"><h2>Доставка</h2>
          <p>В настоящий момент для Вашего региона доступна только услуга самовывоза.
            Самовывоз заказов, оформленных через интернет магазин, в Вашем регионе осуществляется в следующих магазинах.<br/>
            Услуга самовывоза доступна только в рабочее время магазинов. Самовывоз из магазинов является полностью бесплатным.<br/>
            Оформление некоторых заказов может требовать внесения предоплаты.<br/>
            Выдаче подлежат только оплаченные заказы.<br/>
            Если Вы оформляете заказ из наличия магазина, то мы Вам рекомендуем дождаться подтверждения наличия товара: СМС или звонка из нашего контакт-центра.<br/>
             </p></div>

        </div>
    )
  }
}
class Payment extends React.Component{
  render(){
    return(
      <div>


        <div className="description"><h2>Оплата</h2>
      <p>Уважаемые клиенты, по некоторым заказам, требуется внесение предоплаты 50 или 100% от стоимости заказа.<br/>
Внесение предоплаты, как правило, необходимо в ситуации, когда Ваш заказ требует индивидуального заказа товара специально для Вас у поставщиков.<br/>
В случае Вашего отказа от заказа, предоплата возвращается в течении 10 дней после получения Вашего обращения о возврате.<br/>
Предоплата, а также оплата заказа могут быть произведены следующими способами:<br />— банковской картой на Сайте при оформлении заказа;<br />— наличными или банковской картой в магазине.<br/>
Предоплата и последующая оплата могут быть проведены различными способами.<br/>
Цены в Интернет-магазине могут отличаться от цен розничных магазинов.<br/><br/><br/>
</p></div>

      </div>
    )
  }
}
class Warranty extends React.Component{
  render(){
    return(
      <div>

        <div className="description"><h2>Возврат и гарантия</h2>
    <p>Уважаемые Покупатели, Вы вправе отказаться от заказанного товара в любое время до его получения, а после его получения — в течение 7-ми дней, при условии сохранения качества.<br/>
          Возврат товара надлежащего качества возможен в случае, если указанный товар не был в употреблении, сохранены его товарный вид, потребительские свойства, пломбы, фабричные ярлыки, а также имеется товарный чек или кассовый чек либо иной подтверждающий оплату указанного товара документ.<br/>
          Покупатель проверяет Товар при получении с целью выявления возможных механических повреждений, полноты комплектности и ассортимента. Продавец не принимает претензии по внешним недостаткам Товара, его количественного и ассортиментного несоответствия после приемки Товара Покупателем.<br/>
          В случае получения товара ненадлежащего качества Вы вправе отказаться от товара и/или возвратить его, а также потребовать возврата уплаченной за товар денежной суммы.<br/>
          Возврат товара ненадлежащего качества возможен в течение гарантийного срока. Сроки гарантии на товар составляют от 2 недель до 36 месяцев. Гарантия распространяется не на весь товар. Гарантийный срок исчисляется с момента получения Товара Покупателем.
        </p></div>
      </div>
    )
  }
}
class Offer extends React.Component{
  render(){
    return(
      <div>
      <div> </div>
      <div className="description"><h2>Договор оферты</h2>

      </div>
          </div>
    )
  }
}
class Opr extends React.Component{
  state = { modalOpen: false,
            isClickedSearch: false}

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })
      state = {city: "Казань"}



  render(){
    return(
      <div>
    {/*  <City city={this.state.city}/> */}



      </div>
    )
  }
}
/* const Rotute = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Opr } />
      <Route path='/about' component={About } />
      <Route path='/delivery' component={Delivery}/>
      <Route path='/payment' component={Payment}/>
      <Route path='/warranty' component={Warranty}/>
      <Route path='/offer' component={Offer}/>
      <Route path='/pay' component={Pay }/>
      <Route path='/payMethods' component={PayMethods }/>
      <Route path='/brandSearching' component={BrandSearching }/>
      <Route path='/payReceipt' component={PayReceipt }/>
      <Route path='/brandSearchingTable' component={BrandSearchingTable }/>
      <Route path='/entrance' component={Entrance }/>
      <Route path='/nodeExample' component={NodeExample }/>

    </Switch>
  </div>
)
*/

const doc = document.getElementById("root");
ReactDOM.render((

  <BrowserRouter>
    <App />
  </BrowserRouter>),
  doc
);
