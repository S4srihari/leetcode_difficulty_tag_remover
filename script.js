const hideDifficultyTag = () => {
    const difficultyTags = document.evaluate(
      "//*[contains(text(), 'Easy') or contains(text(), 'Medium') or contains(text(), 'Hard')]",
      document,
      null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
      null
    );

    // "//*" selected everything from the page.
    // then Checking for text of *Easy*, *MEdium*, *Hard* and storing in an object 
  
    for (let i = 0; i < difficultyTags.snapshotLength; i++) {
      const difficultyTag = difficultyTags.snapshotItem(i);
      difficultyTag.style.display = 'none';
    }
  };

  // Iterated over the object for tags found and hide the content from the site (Just not visible for us). 
  // After hiding tag we observe for any DOM changes and whenever a change occurs we will again call function to hide
  const observer = new MutationObserver(hideDifficultyTag);
  observer.observe(document, { subtree: true, childList: true });