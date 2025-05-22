// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const navbar = document.getElementById("navbar")
  const menuToggle = document.querySelector(".menu-toggle")
  const navLinks = document.querySelector(".nav-links")
  const galleryItems = document.querySelectorAll(".gallery-item")
  const modal = document.querySelector(".gallery-modal")
  const modalImg = document.getElementById("modalImg")
  const closeModal = document.querySelector(".close-modal")
  const ticketBtns = document.querySelectorAll(".ticket-btn")
  const ticketModal = document.getElementById("ticketModal")
  const ticketModalClose = ticketModal.querySelector(".close-modal")

  // Music Player Elements
  const playPauseBtn = document.getElementById("playPause")
  const prevTrackBtn = document.getElementById("prevTrack")
  const nextTrackBtn = document.getElementById("nextTrack")
  const volumeSlider = document.getElementById("volumeSlider")
  const tracksList = document.getElementById("tracks")
  const albumCover = document.getElementById("albumCover")
  const trackTitle = document.getElementById("trackTitle")
  const trackArtist = document.getElementById("trackArtist")
  const currentTimeEl = document.getElementById("currentTime")
  const totalTimeEl = document.getElementById("totalTime")
  const progressBar = document.querySelector(".progress-bar")
  const progressContainer = document.querySelector(".progress")

  // Floating Player Elements
  const floatingPlayer = document.getElementById("floatingPlayer")
  const floatingAlbumCover = document.getElementById("floatingAlbumCover")
  const floatingTrackTitle = document.getElementById("floatingTrackTitle")
  const floatingTrackArtist = document.getElementById("floatingTrackArtist")
  const floatingPlayPauseBtn = document.getElementById("floatingPlayPause")
  const floatingPrevTrackBtn = document.getElementById("floatingPrevTrack")
  const floatingNextTrackBtn = document.getElementById("floatingNextTrack")
  const closeFloatingPlayerBtn = document.getElementById("closeFloatingPlayer")
  const showPlaylistBtn = document.getElementById("showPlaylist")
  const floatingProgress = document.getElementById("floatingProgress")
  const floatingProgressBar = document.getElementById("floatingProgressBar")
  const floatingCurrentTime = document.getElementById("floatingCurrentTime")
  const floatingTotalTime = document.getElementById("floatingTotalTime")
  const floatingVolumeSlider = document.getElementById("floatingVolumeSlider")
  const floatingVolumeLevel = document.getElementById("floatingVolumeLevel")

  // Sticky Player Elements
  const stickyPlayer = document.getElementById("stickyPlayer")
  const stickyAlbumCover = document.getElementById("stickyAlbumCover")
  const stickyTrackTitle = document.getElementById("stickyTrackTitle")
  const stickyTrackArtist = document.getElementById("stickyTrackArtist")
  const stickyPlayPauseBtn = document.getElementById("stickyPlayPause")
  const stickyPrevTrackBtn = document.getElementById("stickyPrevTrack")
  const stickyNextTrackBtn = document.getElementById("stickyNextTrack")
  const closeStickyPlayerBtn = document.getElementById("closeStickyPlayer")
  const minimizeStickyPlayerBtn = document.getElementById("minimizeStickyPlayer")
  const stickyProgress = document.getElementById("stickyProgress")
  const stickyProgressBar = document.getElementById("stickyProgressBar")
  const stickyCurrentTime = document.getElementById("stickyCurrentTime")
  const stickyTotalTime = document.getElementById("stickyTotalTime")

  // Ticket variables
  const concertTitle = document.getElementById("concertTitle")
  const concertVenue = document.getElementById("concertVenue")
  const concertDate = document.getElementById("concertDate")
  const standardPrice = document.getElementById("standard-price")
  const vipPrice = document.getElementById("vip-price")
  const premiumPrice = document.getElementById("premium-price")
  const standardQuantity = document.getElementById("standard-quantity")
  const vipQuantity = document.getElementById("vip-quantity")
  const premiumQuantity = document.getElementById("premium-quantity")
  const summaryItems = document.getElementById("summary-items")
  const totalPriceEl = document.getElementById("totalPrice")
  const paymentSummaryTickets = document.getElementById("payment-summary-tickets")
  const paymentTotalPrice = document.getElementById("payment-total-price")
  const summaryTitle = document.getElementById("summary-concert-title")

  // Step navigation
  const steps = document.querySelectorAll(".step")
  const stepContents = document.querySelectorAll(".ticket-step-content")
  const nextToStep2Btn = document.getElementById("nextToStep2")
  const backToStep1Btn = document.getElementById("backToStep1")
  const nextToStep3Btn = document.getElementById("nextToStep3")
  const backToStep2Btn = document.getElementById("backToStep2")
  const payButton = document.getElementById("payButton")
  const cancelTicketBtn = document.getElementById("cancelTicket")
  const closeConfirmationBtn = document.getElementById("closeConfirmation")
  const downloadTicketsBtn = document.getElementById("downloadTickets")

  // Payment method
  const paymentMethodOptions = document.querySelectorAll(".payment-method-option")
  const cardDetails = document.getElementById("card-details")
  const yoomoneyDetails = document.getElementById("yoomoney-details")
  const qiwiDetails = document.getElementById("qiwi-details")

  // Confirmation
  const confirmConcert = document.getElementById("confirm-concert")
  const confirmDate = document.getElementById("confirm-date")
  const confirmVenue = document.getElementById("confirm-venue")
  const confirmTickets = document.getElementById("confirm-tickets")
  const confirmName = document.getElementById("confirm-name")
  const confirmOrder = document.getElementById("confirm-order")

  // Add these variables for draggable functionality
  let isDragging = false
  let dragOffsetX = 0
  let dragOffsetY = 0
  let isMinimized = false
  const playerPosition = { top: 80, right: 20, bottom: "auto", left: "auto" }
  const snapThreshold = 20 // Distance in pixels to snap to edge

  // Music player state
  let currentTrackIndex = 0
  let isPlaying = false
  let currentGalleryIndex = 0
  const audio = new Audio()
  let currentConcert = ""
  let currentVenue = ""
  let currentDate = ""
  let basePrice = 2000
  const ticketPrices = {
    standard: 2000,
    vip: 5000,
    premium: 10000,
  }

  // Kishlak tracks data
  const tracks = [
    {
      title: "СХИК2",
      src: "mp3/Кишлак - СХИК2.mp3",
      duration: "1:24",
      cover: "img/3.1.jpg",
      album: "СХИК2",
    },
    {
      title: "Ржавый",
      src: "mp3/Кишлак - Ржавый.mp3",
      duration: "2:21",
      cover: "img/3.1.jpg",
      album: "СХИК2",
    },
    {
      title: "Грязный Кайф",
      src: "mp3/Кишлак - Грязный Кайф.mp3",
      duration: "2:46",
      cover: "img/3.1.jpg",
      album: "СХИК2",
    },
    {
      title: "Мне не очень",
      src: "mp3/кишлак - мне хуёво.mp3",
      duration: "2:31",
      cover: "img/3.1.jpg",
      album: "СХИК2",
    },
    {
      title: "Я утонул в своей ванной",
      src: "mp3/Кишлак - Я утонул в своей ванной.mp3",
      duration: "2:48",
      cover: "img/3.1.jpg",
      album: "СХИК2",
    },
    {
      title: "Холодно",
      src: "mp3/Кишлак - Холодно.mp3",
      duration: "3:21",
      cover: "img/3.1.jpg",
      album: "СХИК2",
    },
    {
      title: "Мнение",
      src: "mp3/Кишлак - Мнение.mp3",
      duration: "2:39",
      cover: "img/3.1.jpg",
      album: "СХИК2",
    },
    {
      title: "Фобия",
      src: "mp3/Кишлак - Фобия.mp3",
      duration: "2:21",
      cover: "img/3.1.jpg",
      album: "СХИК2",
    },
    {
      title: "Зависима",
      src: "mp3/Кишлак - Зависима.mp3",
      duration: "2:50",
      cover: "img/3.1.jpg",
      album: "СХИК2",
    },
    {
      title: "Скучно",
      src: "mp3/Кишлак - Скучно.mp3",
      duration: "2:42",
      cover: "img/3.1.jpg",
      album: "СХИК2",
    },
    {
      title: "Я все",
      src: "mp3/Кишлак - Я все.mp3",
      duration: "3:07",
      cover: "img/3.1.jpg",
      album: "СХИК2",
    },
  ]

  // функция для добавления новых треков
  function addTrack(title, src, duration, cover, album) {
    const newTrack = {
      title: title,
      src: src,
      duration: duration,
      cover: cover || "3.1.jpg", // Обложка по умолчанию
      album: album || "POPSA2025", // Альбом по умолчанию
    }

    tracks.push(newTrack)
    renderTrackList() // Обновляем список треков
    return tracks.length - 1 // Возвращаем индекс нового трека
  }

  // Функция для рендеринга списка треков
  function renderTrackList() {
    if (!tracksList) return

    let trackListHTML = ""

    tracks.forEach((track, index) => {
      trackListHTML += `
        <li class="track ${index === currentTrackIndex ? "active" : ""}" data-index="${index}">
          <div class="track-number">${index + 1}</div>
          <div class="track-info">
            <div class="track-title">${track.title}</div>
            <div class="track-duration">${track.duration}</div>
          </div>
        </li>
      `
    })

    tracksList.innerHTML = trackListHTML

    // Добавляем обработчики событий для новых элементов
    document.querySelectorAll(".track").forEach((item) => {
      item.addEventListener("click", function () {
        const trackIndex = Number.parseInt(this.getAttribute("data-index"))
        loadTrack(trackIndex)
        playTrack()
      })
    })
  }

  // Load track
  function loadTrack(index) {
    if (index < 0) index = tracks.length - 1
    if (index >= tracks.length) index = 0

    currentTrackIndex = index

    // Reset previous track if any
    if (audio.src) {
      audio.pause()
      isPlaying = false
    }

    // Update track info
    audio.src = tracks[index].src

    if (trackTitle) trackTitle.textContent = tracks[index].title
    if (trackArtist) trackArtist.textContent = `Кишлак - ${tracks[index].album}`
    if (albumCover) albumCover.src = tracks[index].cover
    if (totalTimeEl) totalTimeEl.textContent = tracks[index].duration
    if (currentTimeEl) currentTimeEl.textContent = "0:00"

    // Update floating player info
    if (floatingAlbumCover) floatingAlbumCover.src = tracks[index].cover
    if (floatingTrackTitle) floatingTrackTitle.textContent = tracks[index].title
    if (floatingTrackArtist) floatingTrackArtist.textContent = `Кишлак - ${tracks[index].album}`
    if (floatingTotalTime) floatingTotalTime.textContent = tracks[index].duration
    if (floatingCurrentTime) floatingCurrentTime.textContent = "0:00"

    // Update sticky player info
    if (stickyAlbumCover) stickyAlbumCover.src = tracks[index].cover
    if (stickyTrackTitle) stickyTrackTitle.textContent = tracks[index].title
    if (stickyTrackArtist) stickyTrackArtist.textContent = `Кишлак - ${tracks[index].album}`
    if (stickyTotalTime) stickyTotalTime.textContent = tracks[index].duration
    if (stickyCurrentTime) stickyCurrentTime.textContent = "0:00"

    // Update active track in list
    document.querySelectorAll(".track").forEach((item, i) => {
      if (i === index) {
        item.classList.add("active")
      } else {
        item.classList.remove("active")
      }
    })

    updatePlayPauseIcon()
  }

  // Play track
  function playTrack() {
    const playPromise = audio.play()

    // Обработка ошибок воспроизведения
    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          isPlaying = true
          updatePlayPauseIcon()
          showPlayers()
        })
        .catch((error) => {
          console.error("Playback error:", error)
          isPlaying = false
          updatePlayPauseIcon()
        })
    }
  }

  // Pause track
  function pauseTrack() {
    audio.pause()
    isPlaying = false
    updatePlayPauseIcon()
  }

  // Previous track
  function prevTrack() {
    loadTrack(currentTrackIndex - 1)
    if (isPlaying) {
      playTrack()
    }
  }

  // Next track
  function nextTrack() {
    loadTrack(currentTrackIndex + 1)
    if (isPlaying) {
      playTrack()
    }
  }

  // Show players when music is playing
  function showPlayers() {
    // Показываем только плавающий плеер, скрываем sticky плеер
    if (floatingPlayer) {
      floatingPlayer.classList.add("active")
      if (stickyPlayer) stickyPlayer.classList.remove("active")
    }
  }

  // Hide players
  function hidePlayers() {
    if (floatingPlayer) floatingPlayer.classList.remove("active")
    if (stickyPlayer) stickyPlayer.classList.remove("active")
  }

  // Update progress
  function updateProgress() {
    const duration = audio.duration
    const currentTime = audio.currentTime

    if (!isNaN(duration)) {
      // Update progress bar width
      const progressPercent = (currentTime / duration) * 100

      if (progressBar) progressBar.style.width = `${progressPercent}%`
      if (stickyProgressBar) stickyProgressBar.style.width = `${progressPercent}%`
      if (floatingProgressBar) floatingProgressBar.style.width = `${progressPercent}%`

      // Update current time display
      const minutes = Math.floor(currentTime / 60)
      const seconds = Math.floor(currentTime % 60)
        .toString()
        .padStart(2, "0")

      if (currentTimeEl) currentTimeEl.textContent = `${minutes}:${seconds}`
      if (stickyCurrentTime) stickyCurrentTime.textContent = `${minutes}:${seconds}`
      if (floatingCurrentTime) floatingCurrentTime.textContent = `${minutes}:${seconds}`
    }
  }

  // Update play/pause icons across all players
  function updatePlayPauseIcon() {
    const playIcon = '<i class="fas fa-play"></i>'
    const pauseIcon = '<i class="fas fa-pause"></i>'

    if (isPlaying) {
      if (playPauseBtn) playPauseBtn.innerHTML = pauseIcon
      if (stickyPlayPauseBtn) stickyPlayPauseBtn.innerHTML = pauseIcon
      if (floatingPlayPauseBtn) floatingPlayPauseBtn.innerHTML = pauseIcon
    } else {
      if (playPauseBtn) playPauseBtn.innerHTML = playIcon
      if (stickyPlayPauseBtn) stickyPlayPauseBtn.innerHTML = playIcon
      if (floatingPlayPauseBtn) floatingPlayPauseBtn.innerHTML = playIcon
    }
  }

  // Set progress on click
  function setProgress(e) {
    const width = e.currentTarget.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    if (!isNaN(duration)) {
      audio.currentTime = (clickX / width) * duration
    }
  }

  // Initialize Audio Player
  function initAudioPlayer() {
    // Render track list
    renderTrackList()

    // Load first track
    loadTrack(0)

    // Update progress bar as audio plays
    audio.addEventListener("timeupdate", updateProgress)

    // When track ends, play next track
    audio.addEventListener("ended", () => {
      nextTrack()
    })

    // Handle errors
    audio.addEventListener("error", (e) => {
      console.error("Audio error:", e)
      // Если файл не найден, показываем сообщение и переходим к следующему треку
      if (e.target.error && e.target.error.code === 4) {
        alert(`Трек "${tracks[currentTrackIndex].title}" не найден. Переход к следующему треку.`)
        nextTrack()
      }
    })

    // Add event listeners for main player controls
    if (playPauseBtn) {
      playPauseBtn.addEventListener("click", () => {
        if (isPlaying) {
          pauseTrack()
        } else {
          playTrack()
        }
      })
    }

    if (prevTrackBtn) {
      prevTrackBtn.addEventListener("click", prevTrack)
    }

    if (nextTrackBtn) {
      nextTrackBtn.addEventListener("click", nextTrack)
    }

    // Add event listeners for sticky player controls
    if (stickyPlayPauseBtn) {
      stickyPlayPauseBtn.addEventListener("click", () => {
        if (isPlaying) {
          pauseTrack()
        } else {
          playTrack()
        }
      })
    }

    if (stickyPrevTrackBtn) {
      stickyPrevTrackBtn.addEventListener("click", prevTrack)
    }

    if (stickyNextTrackBtn) {
      stickyNextTrackBtn.addEventListener("click", nextTrack)
    }

    // Add event listeners for floating player controls
    if (floatingPlayPauseBtn) {
      floatingPlayPauseBtn.addEventListener("click", () => {
        if (isPlaying) {
          pauseTrack()
        } else {
          playTrack()
        }
      })
    }

    if (floatingPrevTrackBtn) {
      floatingPrevTrackBtn.addEventListener("click", prevTrack)
    }

    if (floatingNextTrackBtn) {
      floatingNextTrackBtn.addEventListener("click", nextTrack)
    }

    // Close sticky player and stop music
    if (closeStickyPlayerBtn) {
      closeStickyPlayerBtn.addEventListener("click", (e) => {
        e.stopPropagation() // Предотвращаем всплытие события
        if (stickyPlayer) stickyPlayer.classList.remove("active")
        pauseTrack() // Stop the music when closing the player
      })
    }

    // Close floating player and stop music
    if (closeFloatingPlayerBtn) {
      closeFloatingPlayerBtn.addEventListener("click", (e) => {
        e.stopPropagation() // Предотвращаем всплытие события
        if (floatingPlayer) floatingPlayer.classList.remove("active")
        pauseTrack() // Stop the music when closing the player
      })
    }

    // Minimize/restore sticky player
    if (minimizeStickyPlayerBtn) {
      minimizeStickyPlayerBtn.addEventListener("click", function (e) {
        e.stopPropagation() // Prevent event bubbling
        e.preventDefault() // Prevent default behavior

        if (isMinimized) {
          // Expand player
          stickyPlayer.classList.remove("minimized")

          // Show hidden elements
          const timeline = stickyPlayer.querySelector(".sticky-timeline")
          const controls = stickyPlayer.querySelector(".sticky-controls")

          if (timeline) timeline.style.display = "block"
          if (controls) controls.style.display = "flex"

          // Change button icon
          this.innerHTML = '<i class="fas fa-minus"></i>'
          this.title = "Свернуть"

          isMinimized = false
        } else {
          // Minimize player
          stickyPlayer.classList.add("minimized")

          // Hide elements
          const timeline = stickyPlayer.querySelector(".sticky-timeline")
          const controls = stickyPlayer.querySelector(".sticky-controls")

          if (timeline) timeline.style.display = "none"
          if (controls) controls.style.display = "none"

          // Change button icon
          this.innerHTML = '<i class="fas fa-expand"></i>'
          this.title = "Развернуть"

          isMinimized = true
        }
      })
    }

    // Show playlist
    if (showPlaylistBtn) {
      showPlaylistBtn.addEventListener("click", () => {
        alert("Плейлист: " + tracks.map((track, index) => `${index + 1}. ${track.title}`).join("\n"))
      })
    }

    // Volume control
    if (volumeSlider) {
      volumeSlider.addEventListener("input", () => {
        audio.volume = volumeSlider.value / 100
        if (floatingVolumeLevel) {
          floatingVolumeLevel.style.width = `${volumeSlider.value}%`
        }
      })
    }

    // Volume control for floating player
    if (floatingVolumeSlider) {
      floatingVolumeSlider.addEventListener("click", (e) => {
        const width = floatingVolumeSlider.clientWidth
        const clickX = e.offsetX
        const volumePercent = clickX / width

        // Set volume (0-1)
        audio.volume = volumePercent

        // Update volume slider
        floatingVolumeLevel.style.width = `${volumePercent * 100}%`

        // Update main volume slider if it exists
        if (volumeSlider) {
          volumeSlider.value = volumePercent * 100
        }
      })
    }

    // Progress bar click events
    if (progressContainer) {
      progressContainer.addEventListener("click", setProgress)
    }

    if (stickyProgress) {
      stickyProgress.addEventListener("click", setProgress)
    }

    if (floatingProgress) {
      floatingProgress.addEventListener("click", setProgress)
    }

    // Make the sticky player draggable
    if (stickyPlayer) {
      stickyPlayer.addEventListener("mousedown", startDrag)
      stickyPlayer.addEventListener("touchstart", handleTouchStart, { passive: false })
    }

    // Make the floating player draggable
    if (floatingPlayer) {
      floatingPlayer.addEventListener("mousedown", startDrag)
      floatingPlayer.addEventListener("touchstart", handleTouchStart, { passive: false })
    }

    // Function to handle touch start for mobile devices
    function handleTouchStart(e) {
      const touch = e.touches[0]
      const mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY,
      })
      startDrag(mouseEvent)

      // Add touch move and end listeners
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("touchend", handleTouchEnd)

      // Prevent default to avoid scrolling
      e.preventDefault()
    }

    // Function to handle touch move
    function handleTouchMove(e) {
      if (!isDragging) return

      const touch = e.touches[0]
      const mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY,
      })
      dragMove(mouseEvent)

      // Prevent default to avoid scrolling
      e.preventDefault()
    }

    // Function to handle touch end
    function handleTouchEnd() {
      const mouseEvent = new MouseEvent("mouseup")
      stopDrag(mouseEvent)

      // Remove touch listeners
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }

    // Функция для начала перетаскивания
    function startDrag(e) {
      // Только начинаем перетаскивание, если клик был на заголовке или информации о плеере
      if (
        e.target.closest(".sticky-header") ||
        e.target.closest(".sticky-player-info") ||
        e.target.closest(".floating-header") ||
        e.target.closest(".floating-player-info")
      ) {
        // Определяем, какой плеер перетаскивается
        const player = e.target.closest(".sticky-player") || e.target.closest(".floating-player")

        if (!player) return

        isDragging = true
        const rect = player.getBoundingClientRect()

        // Сохраняем смещение от точки клика до верхнего левого угла плеера
        dragOffsetX = e.clientX - rect.left
        dragOffsetY = e.clientY - rect.top

        // Устанавливаем текущую позицию плеера в абсолютных координатах
        player.style.position = "fixed"
        player.style.margin = "0"
        player.style.top = rect.top + "px"
        player.style.left = rect.left + "px"
        player.style.right = "auto"
        player.style.bottom = "auto"
        player.style.transform = "none"

        // Remove any snapping classes
        player.classList.remove("snap-left", "snap-right", "snap-top", "snap-bottom")

        // Предотвращаем выделение текста при перетаскивании
        e.preventDefault()

        // Добавляем обработчики для перемещения и окончания перетаскивания
        document.addEventListener("mousemove", dragMove)
        document.addEventListener("mouseup", stopDrag)
      }
    }

    // Function to move the player
    function dragMove(e) {
      if (!isDragging) return

      // Determine active player
      const player = stickyPlayer.classList.contains("active")
        ? stickyPlayer
        : floatingPlayer.classList.contains("active")
          ? floatingPlayer
          : null

      if (!player) return

      // Calculate new position
      const newLeft = e.clientX - dragOffsetX
      const newTop = e.clientY - dragOffsetY

      // Get viewport dimensions
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      // Get player dimensions
      const playerWidth = player.offsetWidth
      const playerHeight = player.offsetHeight

      // Check for edge snapping
      const snapLeft = newLeft < snapThreshold
      const snapRight = newLeft + playerWidth > viewportWidth - snapThreshold
      const snapTop = newTop < snapThreshold
      const snapBottom = newTop + playerHeight > viewportHeight - snapThreshold

      // Remove all snap classes first
      player.classList.remove("snap-left", "snap-right", "snap-top", "snap-bottom")

      // Apply snapping
      if (snapLeft) {
        player.classList.add("snap-left")
        player.style.left = "0px"
      } else if (snapRight) {
        player.classList.add("snap-right")
        player.style.left = viewportWidth - playerWidth + "px"
      } else {
        player.style.left = Math.max(0, Math.min(newLeft, viewportWidth - playerWidth)) + "px"
      }

      // Get navbar height to prevent player from going above it
      const navbarHeight = document.getElementById("navbar").offsetHeight

      if (snapTop) {
        player.classList.add("snap-top")
        player.style.top = navbarHeight + "px" // Set to navbar height instead of 0
      } else if (snapBottom) {
        player.classList.add("snap-bottom")
        player.style.top = viewportHeight - playerHeight + "px"
      } else {
        player.style.top = Math.max(navbarHeight, Math.min(newTop, viewportHeight - playerHeight)) + "px"
      }
    }

    // Function to end dragging
    function stopDrag() {
      if (!isDragging) return

      isDragging = false

      // Remove event listeners
      document.removeEventListener("mousemove", dragMove)
      document.removeEventListener("mouseup", stopDrag)
    }

    // Ensure players stay within viewport bounds
    window.addEventListener("resize", () => {
      if (stickyPlayer && stickyPlayer.classList.contains("active")) {
        const rect = stickyPlayer.getBoundingClientRect()
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight

        // Check if player is outside viewport
        if (rect.right > viewportWidth) {
          stickyPlayer.style.left = `${viewportWidth - rect.width}px`
          stickyPlayer.style.right = "auto"
        }

        if (rect.bottom > viewportHeight) {
          stickyPlayer.style.top = `${viewportHeight - rect.height}px`
          stickyPlayer.style.bottom = "auto"
        }

        if (rect.left < 0) {
          stickyPlayer.style.left = "0px"
          stickyPlayer.style.right = "auto"
        }

        if (rect.top < 0) {
          stickyPlayer.style.top = "0px"
          stickyPlayer.style.bottom = "auto"
        }
      }

      if (floatingPlayer && floatingPlayer.classList.contains("active")) {
        const rect = floatingPlayer.getBoundingClientRect()
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight

        // Check if player is outside viewport
        if (rect.right > viewportWidth) {
          floatingPlayer.style.left = `${viewportWidth - rect.width}px`
          floatingPlayer.style.right = "auto"
        }

        if (rect.bottom > viewportHeight) {
          floatingPlayer.style.top = `${viewportHeight - rect.height}px`
          floatingPlayer.style.bottom = "auto"
        }

        if (rect.left < 0) {
          floatingPlayer.style.left = "0px"
          floatingPlayer.style.right = "auto"
        }

        if (rect.top < 0) {
          floatingPlayer.style.top = "0px"
          floatingPlayer.style.bottom = "auto"
        }
      }
    })
  }

  // Calculate total price
  function calculateTotalPrice() {
    const standardTotal = Number.parseInt(standardQuantity.value) * ticketPrices.standard
    const vipTotal = Number.parseInt(vipQuantity.value) * ticketPrices.vip
    const premiumTotal = Number.parseInt(premiumQuantity.value) * ticketPrices.premium

    return standardTotal + vipTotal + premiumTotal
  }

  // Update ticket summary
  function updateTicketSummary() {
    let summaryHTML = ""
    let paymentSummaryHTML = ""
    let totalTickets = 0
    const ticketDetails = []

    // Standard tickets
    if (Number.parseInt(standardQuantity.value) > 0) {
      summaryHTML += `
                <div class="summary-item">
                    <div class="summary-item-details">
                        <span class="summary-item-type">Стандарт</span>
                        <span class="summary-item-quantity">${standardQuantity.value} x ${ticketPrices.standard}₽</span>
                    </div>
                    <div class="summary-item-price">${Number.parseInt(standardQuantity.value) * ticketPrices.standard}₽</div>
                </div>
            `

      paymentSummaryHTML += `
                <div class="summary-item">
                    <div class="summary-item-details">
                        <span class="summary-item-type">Стандарт</span>
                        <span class="summary-item-quantity">${standardQuantity.value} x ${ticketPrices.standard}₽</span>
                    </div>
                    <div class="summary-item-price">${Number.parseInt(standardQuantity.value) * ticketPrices.standard}₽</div>
                </div>
            `

      totalTickets += Number.parseInt(standardQuantity.value)
      ticketDetails.push(`Стандарт: ${standardQuantity.value} шт.`)
    }

    // VIP tickets
    if (Number.parseInt(vipQuantity.value) > 0) {
      summaryHTML += `
                <div class="summary-item">
                    <div class="summary-item-details">
                        <span class="summary-item-type">VIP</span>
                        <span class="summary-item-quantity">${vipQuantity.value} x ${ticketPrices.vip}₽</span>
                    </div>
                    <div class="summary-item-price">${Number.parseInt(vipQuantity.value) * ticketPrices.vip}₽</div>
                </div>
            `

      paymentSummaryHTML += `
                <div class="summary-item">
                    <div class="summary-item-details">
                        <span class="summary-item-type">VIP</span>
                        <span class="summary-item-quantity">${vipQuantity.value} x ${ticketPrices.vip}₽</span>
                    </div>
                    <div class="summary-item-price">${Number.parseInt(vipQuantity.value) * ticketPrices.vip}₽</div>
                </div>
            `

      totalTickets += Number.parseInt(vipQuantity.value)
      ticketDetails.push(`VIP: ${vipQuantity.value} шт.`)
    }

    // Premium tickets
    if (Number.parseInt(premiumQuantity.value) > 0) {
      summaryHTML += `
                <div class="summary-item">
                    <div class="summary-item-details">
                        <span class="summary-item-type">Премиум</span>
                        <span class="summary-item-quantity">${premiumQuantity.value} x ${ticketPrices.premium}₽</span>
                    </div>
                    <div class="summary-item-price">${Number.parseInt(premiumQuantity.value) * ticketPrices.premium}₽</div>
                </div>
            `

      paymentSummaryHTML += `
                <div class="summary-item">
                    <div class="summary-item-details">
                        <span class="summary-item-type">Премиум</span>
                        <span class="summary-item-quantity">${premiumQuantity.value} x ${ticketPrices.premium}₽</span>
                    </div>
                    <div class="summary-item-price">${Number.parseInt(premiumQuantity.value) * ticketPrices.premium}₽</div>
                </div>
            `

      totalTickets += Number.parseInt(premiumQuantity.value)
      ticketDetails.push(`Премиум: ${premiumQuantity.value} шт.`)
    }

    // Update summary
    summaryItems.innerHTML = summaryHTML || "<p>Выберите билеты</p>"
    paymentSummaryTickets.innerHTML = paymentSummaryHTML || "<p>Нет выбранных билетов</p>"

    // Update total price
    const totalPrice = calculateTotalPrice()
    totalPriceEl.textContent = `${totalPrice}₽`
    paymentTotalPrice.textContent = `${totalPrice}₽`

    // Enable/disable next button
    nextToStep2Btn.disabled = totalTickets === 0

    return {
      totalTickets,
      ticketDetails: ticketDetails.join(", "),
    }
  }

  // Go to step
  function goToStep(stepNumber) {
    // Update step indicators
    steps.forEach((step, index) => {
      if (index + 1 < stepNumber) {
        step.classList.remove("active")
        step.classList.add("completed")
      } else if (index + 1 === stepNumber) {
        step.classList.add("active")
        step.classList.remove("completed")
      } else {
        step.classList.remove("active", "completed")
      }
    })

    // Show correct step content
    stepContents.forEach((content, index) => {
      if (index + 1 === stepNumber) {
        content.classList.add("active")
      } else {
        content.classList.remove("active")
      }
    })

    // Additional actions for specific steps
    if (stepNumber === 3) {
      // Update payment summary
      summaryTitle.textContent = currentConcert
    }
  }

  // Format credit card number with spaces
  function formatCardNumber(e) {
    const value = e.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    let formattedValue = ""

    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += " "
      }
      formattedValue += value[i]
    }

    e.target.value = formattedValue
  }

  // Format expiry date
  function formatExpiryDate(e) {
    let value = e.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")

    if (value.length > 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4)
    }

    e.target.value = value
  }

  // Generate random order number
  function generateOrderNumber() {
    return (
      "ORDER-" +
      Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, "0")
    )
  }

  // Sticky Navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Mobile Menu Toggle
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active")
    this.querySelector("i").classList.toggle("fa-bars")
    this.querySelector("i").classList.toggle("fa-times")
  })

  // Close menu when clicking a nav link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active")
      menuToggle.querySelector("i").classList.add("fa-bars")
      menuToggle.querySelector("i").classList.remove("fa-times")
    })
  })

  // Gallery functionality
  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      currentGalleryIndex = index
      modalImg.src = item.querySelector("img").src
      modal.style.display = "flex"
      document.body.style.overflow = "hidden"
    })
  })

  // Close gallery modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  })

  // Ticket buttons
  ticketBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Reset ticket form
      standardQuantity.value = 0
      vipQuantity.value = 0
      premiumQuantity.value = 0

      // Get concert info
      currentConcert = btn.getAttribute("data-concert")
      currentVenue = btn.getAttribute("data-venue")
      currentDate = btn.getAttribute("data-date")
      basePrice = Number.parseInt(btn.getAttribute("data-price"))

      // Update ticket prices
      ticketPrices.standard = basePrice
      ticketPrices.vip = Math.round(basePrice * 2.5)
      ticketPrices.premium = basePrice * 5

      // Update displayed prices
      standardPrice.textContent = `${ticketPrices.standard}₽`
      vipPrice.textContent = `${ticketPrices.vip}₽`
      premiumPrice.textContent = `${ticketPrices.premium}₽`

      // Update concert info
      concertTitle.textContent = currentConcert
      concertVenue.textContent = currentVenue
      concertDate.textContent = currentDate

      // Update summary
      updateTicketSummary()

      // Show modal and go to step 1
      ticketModal.style.display = "flex"
      document.body.style.overflow = "hidden"
      goToStep(1)
    })
  })

  // Close ticket modal
  ticketModalClose.addEventListener("click", () => {
    ticketModal.style.display = "none"
    document.body.style.overflow = "auto"
  })

  // Cancel ticket purchase
  cancelTicketBtn.addEventListener("click", () => {
    ticketModal.style.display = "none"
    document.body.style.overflow = "auto"
  })

  // Quantity controls
  document.querySelectorAll(".quantity-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const input = this.parentElement.querySelector("input")
      const currentValue = Number.parseInt(input.value)

      if (this.classList.contains("plus") && currentValue < 10) {
        input.value = currentValue + 1
      } else if (this.classList.contains("minus") && currentValue > 0) {
        input.value = currentValue - 1
      }

      updateTicketSummary()
    })
  })

  // Update summary when quantity changes
  standardQuantity.addEventListener("change", updateTicketSummary)
  vipQuantity.addEventListener("change", updateTicketSummary)
  premiumQuantity.addEventListener("change", updateTicketSummary)

  // Step navigation
  nextToStep2Btn.addEventListener("click", () => {
    goToStep(2)
  })

  backToStep1Btn.addEventListener("click", () => {
    goToStep(1)
  })

  nextToStep3Btn.addEventListener("click", () => {
    // Validate customer form
    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    const phoneInput = document.getElementById("phone")

    if (!nameInput.value || !emailInput.value || !phoneInput.value) {
      alert("Пожалуйста, заполните все обязательные поля")
      return
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailInput.value)) {
      alert("Пожалуйста, введите корректный email")
      return
    }

    // Валидация телефона
    const phoneRegex = /^(\+7|8)[0-9]{10}$/
    if (!phoneRegex.test(phoneInput.value.replace(/\s+/g, ""))) {
      alert("Пожалуйста, введите корректный номер телефона в формате +7XXXXXXXXXX или 8XXXXXXXXXX")
      return
    }

    goToStep(3)
  })

  backToStep2Btn.addEventListener("click", () => {
    goToStep(2)
  })

  // Payment method selection
  paymentMethodOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // Update radio button
      this.querySelector('input[type="radio"]').checked = true

      // Update active class
      paymentMethodOptions.forEach((opt) => {
        opt.classList.remove("active")
      })
      this.classList.add("active")

      // Show correct payment details
      const method = this.getAttribute("data-method")

      if (method === "card") {
        cardDetails.style.display = "block"
        yoomoneyDetails.style.display = "none"
        qiwiDetails.style.display = "none"
      } else if (method === "yoomoney") {
        cardDetails.style.display = "none"
        yoomoneyDetails.style.display = "block"
        qiwiDetails.style.display = "none"
      } else if (method === "qiwi") {
        cardDetails.style.display = "none"
        yoomoneyDetails.style.display = "none"
        qiwiDetails.style.display = "block"
      }
    })
  })

  // Format card inputs
  document.getElementById("card-number").addEventListener("input", formatCardNumber)
  document.getElementById("card-expiry").addEventListener("input", formatExpiryDate)

  // Pay button
  payButton.addEventListener("click", () => {
    // Validate terms checkbox
    const termsCheckbox = document.getElementById("terms")

    if (!termsCheckbox.checked) {
      alert("Пожалуйста, примите условия покупки")
      return
    }

    // Validate payment details based on selected method
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value

    if (selectedMethod === "card") {
      const cardNumber = document.getElementById("card-number").value
      const cardExpiry = document.getElementById("card-expiry").value
      const cardCvv = document.getElementById("card-cvv").value
      const cardName = document.getElementById("card-name").value

      if (!cardNumber || !cardExpiry || !cardCvv || !cardName) {
        alert("Пожалуйста, заполните все данные карты")
        return
      }

      // Валидация номера карты
      if (cardNumber.replace(/\s+/g, "").length !== 16) {
        alert("Номер карты должен содержать 16 цифр")
        return
      }

      // Валидация CVV
      if (cardCvv.length !== 3) {
        alert("CVV должен содержать 3 цифры")
        return
      }

      // Валидация срока действия
      const expiryRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/
      if (!expiryRegex.test(cardExpiry)) {
        alert("Срок действия должен быть в формате ММ/ГГ")
        return
      }
    } else if (selectedMethod === "yoomoney") {
      const yoomoneyNumber = document.getElementById("yoomoney-number").value

      if (!yoomoneyNumber) {
        alert("Пожалуйста, введите номер кошелька ЮMoney")
        return
      }
    } else if (selectedMethod === "qiwi") {
      const qiwiNumber = document.getElementById("qiwi-number").value

      if (!qiwiNumber) {
        alert("Пожалуйста, введите номер телефона QIWI")
        return
      }
    }

    // Simulate payment processing
    payButton.disabled = true
    payButton.textContent = "Обработка платежа..."

    setTimeout(() => {
      // Get ticket details
      const ticketInfo = updateTicketSummary()

      // Update confirmation details
      confirmConcert.textContent = currentConcert
      confirmDate.textContent = currentDate
      confirmVenue.textContent = currentVenue
      confirmTickets.textContent = ticketInfo.ticketDetails
      confirmName.textContent = document.getElementById("name").value
      confirmOrder.textContent = generateOrderNumber()

      // Go to confirmation step
      goToStep(4)

      // Reset button
      payButton.disabled = false
      payButton.textContent = "Оплатить"
    }, 2000)
  })

  // Close confirmation
  closeConfirmationBtn.addEventListener("click", () => {
    ticketModal.style.display = "none"
    document.body.style.overflow = "auto"
  })

  // Download tickets (simulated)
  downloadTicketsBtn.addEventListener("click", () => {
    alert("Билеты успешно скачаны!")
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const navbarHeight = navbar.offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Scroll to top button functionality for ticket modal
  const scrollTopBtn = document.getElementById("scrollTopBtn")
  const ticketModalContent = document.querySelector(".ticket-modal-content")

  if (ticketModalContent && scrollTopBtn) {
    ticketModalContent.addEventListener("scroll", function () {
      if (this.scrollTop > 300) {
        scrollTopBtn.classList.add("visible")
      } else {
        scrollTopBtn.classList.remove("visible")
      }
    })

    scrollTopBtn.addEventListener("click", () => {
      ticketModalContent.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Ensure the ticket steps are properly navigable and visible
  document.querySelectorAll(".step").forEach((step) => {
    step.addEventListener("click", function () {
      const stepNumber = Number.parseInt(this.getAttribute("data-step"))
      if (stepNumber) {
        goToStep(stepNumber)

        // Scroll to top of the modal content when changing steps
        if (ticketModalContent) {
          ticketModalContent.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Добавим переключение между плеерами
  // Добавим кнопку для переключения на sticky плеер
  if (floatingPlayer) {
    const switchToStickyBtn = document.getElementById("switchToSticky")
    if (switchToStickyBtn) {
      switchToStickyBtn.addEventListener("click", (e) => {
        e.stopPropagation()
        if (floatingPlayer) floatingPlayer.classList.remove("active")
        if (stickyPlayer) {
          stickyPlayer.classList.add("active")
          // Сбрасываем позицию sticky плеера
          stickyPlayer.style.left = "auto"
          stickyPlayer.style.top = "80px"
          stickyPlayer.style.right = "20px"
        }
      })
    }
  }

  // Initialize everything
  initAudioPlayer()

  // Make sure the floating player is properly initialized and can be switched to
  if (floatingPlayer) {
    const switchToStickyBtn = document.getElementById("switchToSticky")
    if (switchToStickyBtn) {
      switchToStickyBtn.addEventListener("click", (e) => {
        e.stopPropagation()
        if (floatingPlayer) floatingPlayer.classList.remove("active")
        if (stickyPlayer) {
          stickyPlayer.classList.add("active")
          // Reset sticky player position
          stickyPlayer.style.left = "auto"
          stickyPlayer.style.top = "80px"
          stickyPlayer.style.right = "20px"
        }
      })
    }
  }
})
