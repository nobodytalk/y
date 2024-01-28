import React,{useEffect} from 'react';

const KCPCert = (props) => {

    useEffect(() => {
        init_orderid(); // 주문번호 샘플 생성
        auth_type_check();
    })
    // 결제창 종료후 인증데이터 리턴 함수
    // function auth_data( frm )
    // {
    //     var auth_form     = document.form_auth;
    //     var nField        = frm.elements.length;
    //     var response_data = "";

    //     // up_hash 검증 
    //     if( frm.up_hash.value != auth_form.veri_up_hash.value )
    //     {
    //         alert("up_hash 변조 위험있음");
    //     }                

    //     document.getElementById('mobile_number-5961').value = frm.return_phone_no.value;
    //     document.getElementById('first_name-5961').value = frm.return_name.value;
    // }

    // 인증창 호출 함수
    function auth_type_check()
    {
        var auth_form = document.form_auth;

        if( auth_form.ordr_idxx.value == "" )
        {
            alert( "주문번호는 필수 입니다." );

            return false;
        }
        else
        {
            // if( ( navigator.userAgent.indexOf("Android") > - 1 || navigator.userAgent.indexOf("iPhone") > - 1 ) == false ) // 스마트폰이 아닌경우
            // {
            //     var return_gubun;
            //     var width  = 410;
            //     var height = 500;

            //     var leftpos = screen.width  / 2 - ( width  / 2 );
            //     var toppos  = screen.height / 2 - ( height / 2 );

            //     var winopts  = "width=" + width   + ", height=" + height + ", toolbar=no,status=no,statusbar=no,menubar=no,scrollbars=no,resizable=no";
            //     var position = ",left=" + leftpos + ", top="    + toppos;
            //     var AUTH_POP = window.open('','auth_popup', winopts + position);
            // }
            
            auth_form.method = "post";
            // auth_form.target = "auth_popup"; // !!주의 고정값 ( 리턴받을때 사용되는 타겟명입니다.)
            auth_form.action = "https://wp.yepum.co.kr/kcpcert/WEB_ENC/kcpcert_proc_req.php"; // 인증창 호출 및 결과값 리턴 페이지 주소
            auth_form.submit();
            return true;
        }
    }

    // 주문번호 생성 예제 ( up_hash 생성시 필요 ) 
    function init_orderid()
    {
        var today = new Date();
        var year  = today.getFullYear();
        var month = today.getMonth()+ 1;
        var date  = today.getDate();
        var time  = today.getTime();

        if(parseInt(month) < 10)
        {
            month = "0" + month;
        }

        var vOrderID = year + "" + month + "" + date + "" + time;

        document.form_auth.ordr_idxx.value = vOrderID;
    }
    return (
        <div>
            <form name="form_auth">
                <input type="hidden" name="ordr_idxx" class="frminput" value="" size="40" readonly="readonly" maxlength="40"/>

                {/* <!-- 요청종류 --> */}
                <input type="hidden" name="req_tx"       value="cert"/>
                {/* <!-- 요청구분 --> */}
                <input type="hidden" name="cert_method"  value="01"/>
                {/* <!-- 웹사이트아이디 --> */}
                <input type="hidden" name="web_siteid"   value="J21010406291"/> 
                {/* <!-- 사이트코드 --> */}
                <input type="hidden" name="site_cd"      value={"A9UID"} />
                {/* <!-- Ret_URL : 인증결과 리턴 페이지 ( 가맹점 URL 로 설정해 주셔야 합니다. ) --> */}
                <input type="hidden" name="Ret_URL"      value="https://wp.yepum.co.kr/kcpcert/WEB_ENC/kcpcert_proc_req.php" />
                {/* <!-- cert_otp_use 필수 ( 메뉴얼 참고)
                    Y : 실명 확인 + OTP 점유 확인 , N : 실명 확인 only
                --> */}
                <input type="hidden" name="cert_otp_use" value="Y"/>
                {/* <!-- cert_enc_use 필수 (고정값 : 메뉴얼 참고) --> */}
                <input type="hidden" name="cert_enc_use" value="Y"/>

                <input type="hidden" name="res_cd"       value=""/>
                <input type="hidden" name="res_msg"      value=""/>

                {/* <!-- up_hash 검증 을 위한 필드 --> */}
                <input type="hidden" name="veri_up_hash" value=""/>

                {/* <!-- 본인확인 input 비활성화 --> */}
                <input type="hidden" name="cert_able_yn" value=""/>

                {/* <!-- web_siteid 을 위한 필드 --> */}
                <input type="hidden" name="web_siteid_hashYN" value="Y"/>

                {/* <!-- 가맹점 사용 필드 (인증완료시 리턴)--> */}
                <input type="hidden" name="param_opt_1"  value={window.location.origin+"/auth_callback/"}/> 
                <input type="hidden" name="param_opt_2"  value={props.sns_auth ? props.sns_auth.platform : ''}/> 
                <input type="hidden" name="param_opt_3"  value={props.sns_auth ? props.sns_auth.sns_id : ''}/> 
            </form>
        </div>
    );
};

export default KCPCert;