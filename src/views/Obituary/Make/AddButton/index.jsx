import React,{useState, useRef, useEffect} from 'react';
import Input from '../../../../components/Input';
import InputGroup from '../../../../components/InputGroup';
import InputBind from '../../../../components/InputBind';
import Label from '../../../../components/Label';
import Button from '../../../../components/Button';
import {ButtonStyle, PlusIcon, MournerInputWrapper} from '../styled';

export const MournerInput = (props) => {
    const [relation_toggle, update_relation_toggle] = useState(0);
    const relation_ele = useRef(0);
   
    const UpdateValues = (e) => {
        var tmp_obi = props.obi;
        if(e.target.name == 'relation') {
            if(e.target.id == 'relation_select') {
                if(e.target.value == '직접입력') {
                    update_relation_toggle(1);
                    if(relation_ele.current) {
                        relation_ele.current.focus();
                    }
                } else {
                    tmp_obi[props.obi_key][e.target.name] = e.target.value;
                    update_relation_toggle(0);
                    tmp_obi[props.obi_key][e.target.name] = e.target.value;
                }
            } else {
                tmp_obi[props.obi_key][e.target.name] = e.target.value;
            }
        } else {
            tmp_obi[props.obi_key][e.target.name] = e.target.value;
        }
        props.set_obi(tmp_obi);
        console.log(tmp_obi);
    }
    return (
        // <div>
        //     <h1>{props.title}상주</h1>
        //     <div>상주명</div>
        //     <input type="text" name={'name'} onChange={UpdateValues} value={props.item.name}/>
        //     <div>나이</div>
        //     <input type="text" name={'age'} onChange={UpdateValues} value={props.item.age}/>
        // </div>

        <InputGroup>
            <InputBind>
                <Label>관계</Label>
                <Input type="select" name="relation" id="relation_select" placeholder="선택 입력" onChange={UpdateValues} value={props.item.relation}>
                    <option hidden>선택</option>
                    <option value="배우자">배우자</option>
                    <option value="아들">아들</option>
                    <option value="딸">딸</option>
                    <option value="며느리">며느리</option>
                    <option value="사위">사위</option>
                    <option value="손">손</option>
                    <option value="손자">손자</option>
                    <option value="손녀">손녀</option>
                    <option value="외손자">외손자</option>
                    <option value="외손녀">외손녀</option>
                    <option value="손부">손부</option>
                    <option value="손서">손서</option>
                    <option value="외손부">외손부</option>
                    <option value="외손서">외손서</option>
                    <option value="상주">상주</option>
                    <option value="직접입력">직접입력</option>
                </Input>
                {relation_toggle ? (
                    <>
                        <Label></Label>
                        <Input ref={relation_ele} type="textbox" name="relation" placeholder="직접 입력해주세요" onChange={UpdateValues} value={props.item.relation}/>
                    </>
                ) : ''}
                
            </InputBind>
            <InputBind>
                <Label>상주명</Label>
                <Input type="textbox" name="name" placeholder="선택 입력" onChange={UpdateValues} value={props.item.name}/>
            </InputBind>
            <InputBind>
                <Label>휴대전화</Label>
                <Input type="number" name="phone" placeholder="선택 입력" onChange={UpdateValues} value={props.item.phone}/>
            </InputBind>
        </InputGroup>
    );
};

// Todo: 상위에 상주정보값 들어가는 필드를 Set 할수있는 함수를 넘기자 : set_mourner을 넘겨받자.
class AddMourner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            obi: props.mourner[0].relation ? props.mourner : [
                {
                    relation: '',
                    name: '',
                    phone: ''
                }
            ]
        }
        if(props.mourner) {
            this.setState({obi: props.mourner});
            // props.set_mourner(props.mourner);
        }
        // this.props.set_mourner(new_value);
        // 이 지점에 set_mourner 를 실행시켜 부모에도 값을 넘기자
    }

    set_obi = (new_value) => {
        this.setState({obi: new_value});
        this.props.set_mourner(new_value);
    }
    Add = () => {
        this.set_obi(this.state.obi.concat({
            relation: '',
            name: '',
            phone: ''
        }));
        console.log(this.state.obi);
    }

    Remove = key_ => {
        this.set_obi(this.state.obi.filter((item, key) => key !== key_));
    }

    
    render() {
        return (
            <MournerInputWrapper>

                {this.state.obi.map((item, key) => (
                    <>
                        <p>
                            상주{key+1}
                            <button onClick={() => this.Remove(key)}>삭제</button>
                        </p>
                        <MournerInput title={item.id} obi_key={key} item={item} set_obi={this.set_obi} obi={this.state.obi}/>
                    </>
                ))}
                <ButtonStyle>
                    <Button color="#888" onClick={this.Add}><PlusIcon />상주 추가</Button>
                </ButtonStyle>
                
            </MournerInputWrapper>
        );
    }
};

export default AddMourner;