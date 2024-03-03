import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import './Assets.css'
import excelFile from './Overlord_Battalion_.xlsx'; // Path to your Excel file

function AssetReader() {
    const [excelData, setExcelData] = useState([]);
    const [excelHeaders, setExcelHeaders] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(excelFile);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onload = (event) => {
          const binaryString = event.target.result;
          const workbook = XLSX.read(binaryString, { type: 'binary' });
          const sheetName = workbook.SheetNames[0]; // Assuming only one sheet
          const sheet = workbook.Sheets[sheetName];
          const range = { s: { c: 0, r: 2 }, e: { c: 9, r: 2 } }; // A3 to J3
          const headerRow = XLSX.utils.sheet_to_json(sheet, { header: 1, range })[0];
          setExcelHeaders(headerRow);
  
          const dataRange = { s: { c: 0, r: 4 }, e: { c: 9, r: 12 } }; // A5 to J13
          const data = XLSX.utils.sheet_to_json(sheet, { header: 1, range: dataRange });
          setExcelData(data);
        };
        reader.readAsBinaryString(blob);
      };
  
      fetchData();
    }, []);
  
    return (
      <div  className="asset-table">
        <div className="container">
        
        <table border="1">
          <thead>
            <tr>
              {excelHeaders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {excelData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <img src="https://www.shopartcenter.com/cdn/shop/products/rebel-fleet-arrives-rob-kaz.jpg?v=1622169223"/>
      </div>
      </div>
    );
  }

export default AssetReader;