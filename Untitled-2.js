// Function to filter checklist tabs by manufacturer
function filterChecklist(manufacturer) {
    let sections = document.querySelectorAll('.checklist-content');
    sections.forEach(function(section) {
      section.style.display = 'none'; // Hide all sections initially
    });
    
    // Show only the selected manufacturer
    let selectedSection = document.getElementById(manufacturer);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }
  
  // Search function to filter through the checklists
  function searchAircraft() {
    let query = document.getElementById('search-bar').value.toLowerCase();
    let checklistLinks = document.querySelectorAll('.checklist-content');
  
    checklistLinks.forEach(function(link) {
      let content = link.textContent.toLowerCase();
      if (content.includes(query)) {
        link.style.display = 'block';
      } else {
        link.style.display = 'none';
      }
    });
  }
  