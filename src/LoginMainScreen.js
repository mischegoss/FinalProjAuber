import React, { Component } from 'react';
import './App.css';
import img_elN00021restaurant from './images/LoginMainScreen_elN00021restaurant_883381.jpg';
import FirebaseLogin from './FirebaseLogin';


export default class LoginMainScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elText2 = (ev) => {
    // Go to screen 'User'
    this.props.appActions.goToScreen('user', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elN00021restaurant = {
        backgroundImage: 'url('+img_elN00021restaurant+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elText = {
        fontSize: 40.9,
        color: '#3368ff',
        textAlign: 'center',
     };
    const style_elFirebaseLogin_outer = {
        pointerEvents: 'auto',
     };
    const style_elText2 = {
        color: '#3368ff',
        textAlign: 'center',
     };
    const style_elText2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen LoginMainScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
          <div className='containerMinHeight elN00021restaurant' style={style_elN00021restaurant} />
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='font-helveticaBold  elText'>
            <div style={style_elText}>
              <div>{this.props.locStrings.loginmain_text_758871}</div>
            </div>
          
          </div>
          
          <div className='elFirebaseLogin' style={style_elFirebaseLogin_outer}>
            <div>
              <FirebaseLogin ref={(el)=> this._elFirebaseLogin = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='baseFont elText2' style={style_elText2_outer}>
            <div style={style_elText2} onClick={this.onClick_elText2} >
              <div>{this.props.locStrings.loginmain_text2_130360}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
