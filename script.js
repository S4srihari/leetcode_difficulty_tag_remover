const hideDifficultyTag = () => {
    const difficultyTags = document.evaluate(
      "//*[contains(text(), 'Easy') or contains(text(), 'Medium') or contains(text(), 'Hard')]",
      document,
      null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
      null
    );
  
    for (let i = 0; i < difficultyTags.snapshotLength; i++) {
      const difficultyTag = difficultyTags.snapshotItem(i);
      difficultyTag.style.display = 'none';
    }
  };
  
  const observer = new MutationObserver(hideDifficultyTag);
  observer.observe(document, { subtree: true, childList: true });
  