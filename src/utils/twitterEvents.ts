//@ts-nocheck
export const trackTwitterEvent = (eventId: string, data: object = {}) => {
  if (window.twq) {
    window.twq('event', eventId, data);
  }
};
