import React from 'react'
import styled from 'styled-components'
import logo from './danar.jpg'
import logo2 from './tyo.jpg'

const Container = styled.div`
background-color: #3700b3;
border: 2px solid #ffffff;
border-radius: 30px;
color: #ffffff;
position: relative;
width: 45%;
padding : 50px;
margin: auto;
margin-top: 190px;
@media screen and (max-width: 500px) {
       margin: auto;
}
`
const Title = styled.h5`
  margin: auto;
  color:ffffff;
  font-size:18px;
  font-family: sans-serif;
`
const Image = styled.img`

  border: 5px solid #cf6679;
  border-radius: 50%;
  padding: 2px;
  width: 60%;
  height: auto;
  margin: 20px;
  
`
const SelectKelas = styled.select`
	font-size: 16px;
	font-family: sans-serif;
	font-weight: 700;
	color: #ffffff;
	line-height: 1.3;
	padding: .2em 1em;
	width: 40%;
	margin: 0;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: 20px;
	appearance: none;
	background-color: #121212;
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
    margin: 30px
`

const ColumnCard = styled.div
    `
    display: table-cell;
    text-align: center;

`
const Rowcard = styled.div
    `
    display: table;
    width: 100%;
    table-layout: fixed;
    border-spacing: 0px;
    text-align: center;
`

function CardInfo(props) {
    return (
        <div>
        <Image src={props.src} /><br />
        <a>{props.nama}</a><br />
        <a>{props.nim}</a>
        </div>

    )
}


export default function index() {
    return (

        <Rowcard>
            <ColumnCard>
                <Container>
                    <Title>
                        <CardInfo nama="M.Risqullah Naufal Y." nim="21120117140003" src={logo} />
                    </Title>
                    <SelectKelas>
                        <option value="0">Kelas</option>
                        <option value="1">A</option>
                        <option value="2">B</option>
                    </SelectKelas>
                </Container>
            </ColumnCard>
            <ColumnCard>
                <Container>
                    <Title>
                        <CardInfo nama="Setyo Adi N." nim="21120117130077" src={logo2} />
                    </Title>
                    <SelectKelas>
                        <option value="0">Kelas</option>
                        <option value="1">A</option>
                        <option value="2">B</option>
                    </SelectKelas>
                </Container>
            </ColumnCard>
        </Rowcard>

    );
}
