import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function HeaderComponent() {
  
  const [ state, setState ] = React.useState({
    isSearch: false,
    searchMsg: ''
  });
  
  // searching-bar onFocus event 
  const onFocusInput=(e)=>{
    setState({
      ...state,
      isSearch: true
    });
  }

  // searching-bar onBlur event
  const onBlurInput=(e)=>{
    setState({
      ...state,
      isSearch: false,
      searchMsg: ''
    });
  }

  // searching-bar onChange event
  const onChangeInput=(e)=>{
    const { value } = e.target;
    let isSearch = false;
    
    if( value !== '' ){
      isSearch = true;
      
      setState({
        ...state,
        isSearch: isSearch,
        searchMsg: value
      });
    }
  }

  // 검색 x버튼 클릭 이벤트
  const onClickDeleteSearchMsg=(e)=>{
    e.preventDefault();

    setState({
      ...state,
      isSearch: true,
      searchMsg: ''
    })
  }
  
  return (
    <>
    <header id="header">
      <nav className="nav-bar__container">
        <div className="nav-bar__left">
          <div className="nav-bar__img">
            <Link to="/home"><img src="./images/header/icon-navi-logo.svg" alt="숨고 로고" /></Link>
          </div>
          <ul className="nav-bar__list">
            <li><Link to="/request">서비스요청</Link></li>
            <li><Link to="/finding">고수찾기</Link></li>
            <li><Link to="/market">마켓</Link></li>
            <li><Link to="/community">커뮤니티</Link></li>
          </ul>
        </div>
        {/* 클릭 => dropdown response 구현 */}
        <div className="nav-bar__center">
          <form action="" className={state.isSearch ? 'nav-bar__search on' : 'nav-bar__search'}>
            <div className="nav-bar__icon">
              <img src="./images/header/icon-navi-search.svg" alt="검색 아이콘" />
            </div>
            <input type="text" className='nav-bar__input' placeholder='어떤 서비스가 필요하세요?' autoComplete='off' onFocus={onFocusInput} onBlur={onBlurInput} onChange={onChangeInput} value={state.searchMsg}/>
            <div className={state.isSearch ? 'nav-bar__btn' : 'nav-bar__btn hide'}>
              <img src="./images/header/icon-navi-close.svg" alt="닫기 버튼" onClick={onClickDeleteSearchMsg}/>
            </div>
          </form>
          <div className="nav-bar__suggest hide">
            <div className="suggest__container">
              <ul className="suggest__tap">
                <li><a href="!#">인기 키워드</a></li>
                <li><a href="!#">최근 검색한 서비스</a></li>
              </ul>
              <ul className="suggest__list">
                <li><a href="!#">영어 과외</a></li>
                <li><a href="!#">퍼스널트레이닝(PT)</a></li>
                <li><a href="!#">보컬 레슨</a></li>
              </ul>
            </div>
            <div className="suggest__btn">
              <div></div>
              <div>닫기</div>
            </div>
          </div>
        </div>
        <div className="nav-bar__right">
          <ul className="nav-bar__user">
            <li><Link to="/login">로그인</Link></li>
            <li><Link to="/join">회원가입</Link></li>
          </ul>
          <Link to="/expertJoin"><button className='nav-join__button' type='button'>고수가입</button></Link>
        </div>
      </nav>
    </header>
    <Outlet/>
    </>
  )
}
