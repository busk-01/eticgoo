
import React from 'react';

export const TRIPS_DATA: any[] = [
  {
    id: '1',
    title: 'Uganda 360º: Naturaleza Pura',
    description: 'Explora la "Perla de África" en una expedición total de 20 días.',
    longDescription: 'Uganda engloba toda la increíble biodiversidad del continente africano dentro de sus fronteras. Desde las sabanas repletas de fauna hasta los bosques tropicales donde habitan los últimos gorilas de montaña. Un territorio culturalmente rico con 56 tribus y paisajes que son un mosaico de vida. En Etic go te llevamos a conocer a los sebei, los karamojong y los batwa en una experiencia de valor incalculable.',
    itinerary: [
      'Día 1: Llegada a Entebbe y traslado privado.',
      'Día 2: Humedales de Mabamba (Picozapato) y Jinja.',
      'Día 3-4: Cascadas Sipi y PN Monte Elgon.',
      'Día 5: Reserva Pian Upe y Moroto.',
      'Día 6-7: PN Valle de Kidepo (Safari salvaje).',
      'Día 8-9: PN Cataratas Murchison y Delta del Nilo.',
      'Día 10: Bosque de Budongo y Santuario Ziwa.',
      'Día 11: Crater Lakes y Fort Portal.',
      'Día 12-13: PN Queen Elizabeth y Canal de Kazinga.',
      'Día 14: Ishasha (Leones trepadores).',
      'Día 15-16: PN Bwindi y Trekking de Gorilas.',
      'Día 17: Relajación en Lago Bunyonyi.',
      'Día 18: PN Lago Mburo.',
      'Día 19-20: Regreso a Entebbe y Jardín Botánico.'
    ],
    mapPoints: [
      { 
        name: "Entebbe", 
        lat: 0.0512, 
        lng: 32.4422, 
        description: "Ciudad a orillas del Lago Victoria y punto de partida de nuestra aventura.",
        image: "https://images.unsplash.com/photo-1589197331516-4d84593ea067?auto=format&fit=crop&q=80&w=400"
      },
      { 
        name: "Jinja", 
        lat: 0.4479, 
        lng: 33.2032, 
        description: "El nacimiento del Nilo Blanco, donde el río abandona el Lago Victoria.",
        image: "https://images.unsplash.com/photo-1518107612745-2f3b1d3d0e3a?auto=format&fit=crop&q=80&w=400"
      },
      { 
        name: "Cascadas Sipi", 
        lat: 1.3411, 
        lng: 34.3753, 
        description: "Tres impresionantes caídas de agua en las faldas del Monte Elgon.",
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=400"
      },
      { 
        name: "PN Valle de Kidepo", 
        lat: 3.9000, 
        lng: 33.7833, 
        description: "Uno de los parques más salvajes y aislados de toda África.",
        image: "https://images.unsplash.com/photo-1516422317184-268d7101a0b8?auto=format&fit=crop&q=80&w=400"
      },
      { 
        name: "PN Cataratas Murchison", 
        lat: 2.2500, 
        lng: 31.7500, 
        description: "Donde el Nilo se estrecha a 7 metros creando una fuerza descomunal.",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=400"
      },
      { 
        name: "PN Queen Elizabeth", 
        lat: -0.1667, 
        lng: 30.0000, 
        description: "Famoso por sus leones trepadores y la enorme biodiversidad del canal de Kazinga.",
        image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&q=80&w=400"
      },
      { 
        name: "Bwindi Impenetrable Forest", 
        lat: -1.0500, 
        lng: 29.6167, 
        description: "Santuario de los últimos gorilas de montaña del planeta.",
        image: "https://images.unsplash.com/photo-1576504677634-033c09701120?auto=format&fit=crop&q=80&w=400"
      },
      { 
        name: "Lago Bunyonyi", 
        lat: -1.2833, 
        lng: 29.9167, 
        description: "El lugar de muchos pajaritos, un refugio de paz con 29 islas.",
        image: "https://images.unsplash.com/photo-1523805081730-614449274055?auto=format&fit=crop&q=80&w=400"
      }
    ],
    technicalInfo: {
      included: [
        'Traslados en vehículo 4X4 con chófer-guía.',
        'Pensión completa durante todo el trayecto.',
        'Permisos para trekking de gorilas en Bwindi.',
        'Entradas a todos los parques nacionales mencionados.',
        'Seguimiento y asistencia 24h.'
      ],
      notIncluded: [
        'Vuelos internacionales.',
        'Visado (50$).',
        'Bebidas y propinas.',
        'Seguro médico y de cancelación.'
      ]
    },
    price: 3450,
    duration: '20 días',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200',
    category: 'Selva'
  }
];

export const Icons = {
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  Calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  ),
  ChevronRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  ),
  ArrowLeft: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
  ),
  Info: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  ),
  Download: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
  ),
  // Itinerary Specific Icons
  Plane: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
  ),
  PawPrint: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><circle cx="9" cy="10" r="2"/><path d="M9 14c-1.66 0-3 1.34-3 3 0 2 2 5 4 5s4-3 4-5c0-1.66-1.34-3-3-3z"/></svg>
  ),
  Footprints: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 16v-2.3c0-1.1.2-2.2.6-3.2l.5-1.3C5.6 7.8 7 7 8.5 7h.5c1.4 0 2.5 1.1 2.5 2.5V11"/><path d="M12 16v-2.3c0-1.1.2-2.2.6-3.2l.5-1.3C13.6 7.8 15 7 16.5 7h.5c1.4 0 2.5 1.1 2.5 2.5V11"/><path d="M8 21h.01"/><path d="M16 21h.01"/></svg>
  ),
  Waves: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C5.8 7 7 6 8 6c1 0 2.2 1 3.5 1s2.5-1 3.5-1c1 0 2.2 1 3.5 1 .6 0 1.2-.5 1.5-1"/><path d="M2 12c.6.5 1.2 1 2.5 1 1.3 0 2.5-1 3.5-1 1 0 2.2 1 3.5 1s2.5-1 3.5-1c1 0 2.2 1 3.5 1 .6 0 1.2-.5 1.5-1"/><path d="M2 18c.6.5 1.2 1 2.5 1 1.3 0 2.5-1 3.5-1 1 0 2.2 1 3.5 1s2.5-1 3.5-1c1 0 2.2 1 3.5 1 .6 0 1.2-.5 1.5-1"/></svg>
  ),
  Landmark: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7 12 2"/><path d="M2 22h20"/><path d="M4 7v11"/><path d="M20 7v11"/></svg>
  ),
  Coffee: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>
  ),
  Bus: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="12" x="4" y="4" rx="2"/><path d="M8 16v3"/><path d="M16 16v3"/><path d="M4 8h16"/><path d="M12 4v4"/></svg>
  )
};
