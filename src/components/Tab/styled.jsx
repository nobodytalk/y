import styled from 'styled-components';

export const TabStyle = styled.ul`
    display: flex;
    justify-content: space-between;
    li{
        display: inline-block;
        width: 30%; 
    }

    a{  
        display: block;
        font-size: 15px;
        line-height: 48px;
        text-align: center;
        text-decoration: none;
        color: #888;
        border-bottom: 3px solid transparent;
        letter-spacing: -0.55px;
        :focus
            {outline: none;
        }
    }
    li.active a {
        position: relative;
        font-weight: 500;
        color: #111;
        :after{
            display: block;
            position: absolute;
            content: '';
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 60%;
            height: 3px;
            border-bottom: 3px solid #111;
        }
    }
`;

export const MessageTabStyle = styled.ul`
    display: flex;
    justify-content: space-between;
    width: ${props => props.width ? props.width: ''};
    margin-bottom: 10px;
    li{
        display: inline-block;
        width: 33.33%;
    }
    a{
        display: block;
        font-size: 14px;
        font-weight: normal;
        color: #888;
        border: 1px solid #ededed;
        background: #f7f7f7;
        letter-spacing: -0px.55px;
        width: 100%;
        padding: 12px 0px;
        text-align: center;
        text-decoration: none;
        :focus{
            outline: none;
        }
    }
    li.active a {
        position: relative;
        font-weight: 500;
        color: #111;
        :after {
            display: block;
            position: absolute;
            content: '';
            bottom: -1px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: 38px;
            border: 1px solid #24243a
        }
        :before{
            display: inline-block;
            position: relative;
            content: '';
            width: 11px;
            height: 8px;
            bottom: 2px;
            background-image: url(/check.png);
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            margin-right: 5px;
        }
    }
`;