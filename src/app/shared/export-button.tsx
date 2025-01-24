'use client';

import { PiArrowLineUpBold } from 'react-icons/pi';
import { Button } from 'rizzui';




export default function ExportButton() {
  return (
    <Button
      variant="outline"
   
      className='text-gray-500 border hover:border-orange-400 hover:text-orange-400 @lg:w-auto'
    >
      <PiArrowLineUpBold className="me-1.5 h-[17px] w-[17px]" />
      Export
    </Button>
  );
}
