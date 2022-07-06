import styled from 'styled-components';
import {COLORS} from '../../Share/Colors'


const Li = styled.li`

    color : ${COLORS.White};

    &.nav-link {

        padding: 1% 20px;

        & > a, > span {

            position: relative;
        
            &::after {
                content: "";
                position: absolute;
                display: flex;
                width: calc(100% - 25px);
                height: 1.5px;
                bottom: 5px;
                left: 15px;
                background-color: ${COLORS.White};
                transform: scaleX(0);
                transition: transform 0.3s ease;
            }

            &.dropdown::after {
                bottom: 16px;
            }

            &.dropdown.active::after {
                transform: scaleX(1);
                width: 100%;
                left: 0;
            }

            &.active::after {
                transform: scaleX(1);
            }
        
        }

        & > a:hover::after {
            transform: scaleX(1);
        }

    }

    &.dropdown-parent {

        display: flex;
        justify-content: center;
        cursor: pointer;
        position: relative;

        &:hover > ul {

            display: block;
            position: absolute;
            border-radius: 0.5em;
            overflow: hidden;
            background-color: ${COLORS.White};
            top: 70%;
            line-height: 1.5;

            @media (max-width: 768px) {
                top: 1.8em;
            }

            & > li {

                &:hover {
                    background-color: ${COLORS.LightBlue};

                    & > a {
                        color: ${COLORS.White};
                    }

                }

            }

        }
    }

    &.responsive-nav--li {
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: center;
        border-bottom: 2px solid ${COLORS.White};

        &:hover {
            background-color: ${COLORS.LightBlue};
        }

    }

    &.responsive-nav--li-dropdown {
        width: 100%;
        // background-color: ${COLORS.LightBlue};
        
        &:hover {
            background-color: ${COLORS.LightBlue};
        }

    }

    &.responsive-dropdown--parent {
        padding-bottom: 0;

        &:hover {
            background-color: ${COLORS.Blue};
        }

        // & > .responsive-dropdown {
        //     background-color: ${COLORS.DarkBlue};
        // }

        // & > .responsive-dropdown:hover {
        //     background-color: ${COLORS.LightBlue};
        // }

    }

    &.about-us--li {
        color: ${COLORS.Black};
    }

    &.admin-menu--li {
        padding: 15px;
        cursor: pointer;
        border-radius: 12px;
        transition: background-color 0.2s ease;
    
        &:hover {
            background-color: #f0f2f4;
            transition: background-color 0.2s ease;
        }

        & span {
            padding-left: 15px;
            vertical-align: middle;
        }

        &.admin-active {
            background-color: #e8eef7;
        }

    }

`

export default Li;