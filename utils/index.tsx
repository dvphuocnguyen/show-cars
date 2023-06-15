import { CarProps } from "@/types";

export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': '9646935753msh9b19bc861d3b210p12c91bjsn31dc90d00e64',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
        headers: headers,
    });
    const result = await response.json();

    return result;
}


//caculater Car Rent
export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age
  
	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
	return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) =>{
	//key...
	const url = new URL('https://cdn.imagin.studio/getimage');
	
	const {make, year, model} =  car;
	
	url.searchParams.append('customer', 'vnbkdn');
	url.searchParams.append('modelFamily', model.split('')[0]);
	url.searchParams.append('zoomType', 'fullscreen');
	url.searchParams.append('modelYear', `${year}`);
	url.searchParams.append('angle', `${angle}`);


return `${url}`
}