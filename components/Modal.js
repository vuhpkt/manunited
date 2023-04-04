import html from '../core.js';
import { connect } from '../store.js';

function Modal({ legends, modalIndex, type }) {
    if (type == 'legend') {
        const {
            name,
            pngImg,
            birth,
            nation,
            nationImg,
            description,
            appearance,
            primierCup,
            faCup,
            faCharity,
            championCup,
            goals,
            view,
            animated,
        } = legends[modalIndex];
        return html`<div class="modal">
            <div class="modal__overlay" onclick="dispatch('closeModal')"></div>
            <div class="modal__container ${animated && 'modal--animated'} ">
                <div class="modal__close" onclick="dispatch('closeModal')">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div class="modal__background hide-on-mobile">
                    <img src="${pngImg}" alt="" class="modal__background-img" />
                </div>
                <div class="modal__info">
                    <ul class="nav">
                        <li
                            class="nav__item ${view === 'general' && 'nav__item--active'}"
                            onclick="dispatch('changeView', 'general')"
                        >
                            GENERAL
                        </li>
                        <li
                            class="nav__item ${view === 'title' && 'nav__item--active'}"
                            onclick="dispatch('changeView', 'title')"
                        >
                            TITLE
                        </li>
                    </ul>
                    ${view === 'general'
                        ? `<div class="general">
                    <div class="general__name">${name}</div>
                    <div class="general__date">Birth: ${birth}</div>
                    <div class="general__nation">
                        <span class="general__nation-title">Nationality:</span>
                        <img src="${nationImg}" alt="" class="general__nation-img" />
                        <span class="general__nation-name">${nation}</span>
                    </div>
                    <div class="general__text">${description}</div>
                    <div class="row">
                        <div class="col l-6 m-6 c-6 general__career">
                            <span class="general__career-title">Appearances:</span>
                            <span class="general__career-number">${appearance}</span>
                        </div>
                        <div class="col l-6 m-6 c-6 general__career">
                            <span class="general__career-title">Total Goals:</span>
                            <span class="general__career-number">${goals}</span>
                        </div>
                    </div>
                    </div>`
                        : `<div class="title">
                            <div class="row no-gutters">
                            <img src="./assets/img/premier_league_cup.png" alt="" class="title__cup"><img src="./assets/img/premier_league_cup.png" alt="" class="title__cup"><img src="./assets/img/premier_league_cup.png" alt="" class="title__cup"><img src="./assets/img/premier_league_cup.png" alt="" class="title__cup"><img src="./assets/img/premier_league_cup.png" alt="" class="title__cup"><img src="./assets/img/premier_league_cup.png" alt="" class="title__cup"><img src="./assets/img/premier_league_cup.png" alt="" class="title__cup"><img src="./assets/img/premier_league_cup.png" alt="" class="title__cup">
        
                            </div>
                            <div class="row no-gutters">
        <img src="./assets/img/fa_cup.png" alt="" class="title__cup">
        <img src="./assets/img/fa_cup.png" alt="" class="title__cup">
        <img src="./assets/img/fa_cup.png" alt="" class="title__cup">
        <img src="./assets/img/fa_cup.png" alt="" class="title__cup">
                            
                            </div>
                            <div class="row no-gutters">
                                <img src="/assets/img/champion_league.png" alt="" class="title__cup" />
                                <img src="/assets/img/champion_league.png" alt="" class="title__cup" />
                                <img src="/assets/img/champion_league.png" alt="" class="title__cup" />
                                <img src="/assets/img/champion_league.png" alt="" class="title__cup" />
                                <img src="/assets/img/champion_league.png" alt="" class="title__cup" />
                                <img src="/assets/img/champion_league.png" alt="" class="title__cup" />
                                <img src="/assets/img/champion_league.png" alt="" class="title__cup" />
                            </div>
                        </div>`}
                </div>
            </div>
        </div>`;
    }
    if (type == 'authen')
        return html`<div class="modal">
            <div class="modal__overlay" onclick="dispatch('closeModal')"></div>
            <form class="form">
                <h2 class="form__title">Login</h2>
                <div class="form__box">
                    <input type="text" class="form__input" required="required" spellcheck="false" />
                    <span class="form__placeholder">Username</span>
                    <span class="form__deco"></span>
                </div>
                <div class="form__box">
                    <input type="password" class="form__input" required="required" spellcheck="false" />
                    <span class="form__placeholder">Password</span>
                    <span class="form__deco"></span>
                </div>
                <div class="form__link-box">
                    <a href="" class="form__link">Forgot password ?</a>
                    <span class="form__type">Signup</span>
                </div>
                <div>
                    <div class="form__submit" onclick="dispatch('closeModal')">Login</div>
                </div>
            </form>
        </div>`;
}

export default connect()(Modal);
