'use client';

import { addDays, format } from 'date-fns';

export default function MaintenanceDate() {
  const tomorrow = addDays(new Date(), 1);
  return format(tomorrow, "dd.MM.yyyy 'at' HH:mm 'CET'");
}
