const chat = document.getElementById("chat");
const leadBox = document.getElementById("lead");

let lead = {
  name: "",
  phone: "",
  service: "",
  preferred_time: "",
  status: "Not captured"
};

function addMessage(text, who) {
  const div = document.createElement("div");
  div.className = "msg " + who;
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function botReply(userText) {
  const text = userText.toLowerCase();

  if (text.includes("phone") || text.match(/\d{3}[- ]?\d{3}[- ]?\d{4}/)) {
    extractLead(userText);

    return "Got it. I captured your info and sent it to the business owner for follow-up. You should receive a confirmation or quote shortly.";
  }

  if (text.includes("price") || text.includes("how much") || text.includes("full detail")) {
    return "A full detail usually starts around $180, but final pricing depends on vehicle size and condition. Want me to grab your name, phone, and vehicle so the shop can send an exact quote?";
  }

  if (text.includes("ceramic")) {
    return "Yes, we offer ceramic coating packages. Most customers choose 1-year, 3-year, or 5-year protection. Send your name, phone, vehicle, and preferred day, and I’ll pass it to the shop.";
  }

  if (text.includes("book") || text.includes("appointment") || text.includes("saturday")) {
    return "We can help with booking. What service are you looking for, and what day/time works best? Please include your name and phone number.";
  }

  return "I can help with pricing, ceramic coating, full details, availability, and booking. What service are you interested in?";
}

function extractLead(text) {
  const phoneMatch = text.match(/\d{3}[- ]?\d{3}[- ]?\d{4}/);

  lead.phone = phoneMatch ? phoneMatch[0] : "Detected but needs confirmation";

  const lower = text.toLowerCase();

  if (lower.includes("tarun")) {
    lead.name = "Tarun";
  }
  else if (lower.includes("my name is")) {
    lead.name = text.split("my name is")[1]?.split(",")[0]?.trim() || "Needs confirmation";
  }
  else {
    lead.name = "Needs confirmation";
  }

  if (lower.includes("ceramic")) {
    lead.service = "Ceramic coating";
  }
  else if (lower.includes("detail")) {
    lead.service = "Detailing";
  }
  else if (lower.includes("tint")) {
    lead.service = "Window tint";
  }
  else {
    lead.service = "Needs confirmation";
  }

  if (lower.includes("friday")) {
    lead.preferred_time = "Friday afternoon";
  }
  else if (lower.includes("saturday")) {
    lead.preferred_time = "Saturday";
  }
  else {
    lead.preferred_time = "Needs confirmation";
  }

  lead.status = "Captured";

  leadBox.textContent = JSON.stringify(lead, null, 2);
}

function sendMessage() {
  const input = document.getElementById("message");
  const text = input.value.trim();

  if (!text) {
    return;
  }

  addMessage(text, "user");

  input.value = "";

  setTimeout(() => {
    addMessage(botReply(text), "bot");
  }, 400);
}

function sendQuick(text) {
  document.getElementById("message").value = text;
  sendMessage();
}

addMessage(
  "Hey, thanks for messaging Velocity Detail Demo. I can help with pricing, services, and booking. What are you looking to get done?",
  "bot"
);
