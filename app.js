const chapters = {
  1: `进入新班级的第一天，陈琴把我换到中间的位置了。我的新同桌是一个男生，不好意思转头看他，只能余光瞟两眼。感觉是一个白白净净的男生，看起来很乖很腼腆，逗起来一定很有趣。\n\n糟了李昕，你是不是就喜欢这类型的，为啥心跳快了一点！不行你不能这么肤浅，你一定是前一天没睡好！`,
  2: `跟新同学坐一起一周没说过话，总感觉很尴尬但也不知道说什么，没想到第一次正式的交流是在语文课上被强制要求沟通讨论！！！李昕你也太怂了一点吧被老师说了好几次都不敢转过去跟人家说话。。不过看同桌也不是很敢讲话的样子我就放心了～很符合我对同桌的第一印象`,
  3: `跟新同桌熟一点了！可以正常交流了！感觉同桌也不是很社恐的样子，讲起小话还是很起劲的，正好我也喜欢上课开小差讲话～可惜上课讲话被语文老师听到了，既然他都站起来了，我肯定得站啊，他又不能跟空气讲话啊！不过没想到后面他会把责任全揽到自己身上，上课跟他聊天我也很开心啊，怎么会只有他的责任。但我还是太怂了。。。他的责任心替我打破了窘迫的困境，但也让我有一点点的自惭形秽。\n\n我什么时候能像他一样勇敢啊。`,
  4: `陈琴为什么又把我换到后面啊，好不容易跟新同桌熟起来，难道是她听说我俩上课偷偷讲小话的事了？\n\n有点小遗憾吧，没有搞明白那时候的心跳加快是春心萌动，还是青春期面对异性自然的紧张。分开也好，我有很多时间去搞明白。`,
  5: `怎么有人突然通过动态加我，居然还正巧是他！原来他这么喜欢社交的吗……他说加我是因为正好在动态看到，会不会是猜到可能是我，故意想加我的呢……\n\n哎呀不要再自作多情了李昕！说不定他谁都加了呢！`,
  6: `没想到线上跟他聊天这么有意思，回复积极，聊天内容有趣，这就是我梦寐以求的交流方式啊……经过这段时间的了解，他对我的吸引力越来越大，并且我好像陷入的一种奇怪的状态：聊天的时候会迎合对方的话题，不想让他感到冷场；发完消息之后会一直等着他的回复，对方发完消息我会尽可能快的回复。\n\n我其实不是很懂我的状态，是因为没有朋友而索求友情，还是将对方放在爱人的位置（我特别喜欢爱人这个词啊！），我只知道，现在的我跟他聊天会很开心（笑脸）。`,
  7: `好吧，我觉得我是喜欢上了。\n\n你的名字开始成为我生命中的关键字，一切跟你有关的事都会吸引我的注意力。我会在课间偷偷看向你，看看你在做些什么。我甚至会在上课大家起哄的时候，趁着班级里都乱糟糟的时候肆无忌偷看你的反应——看到你笑，我就觉得心里满满的。\n\n这么写显得我很没文笔，也像一个大变态。好吧，我也是这么认为的。\n\n毕竟哪会有正常人运动会一个人坐在旁边看跳高比赛，现在想想还觉得我很二，并且暗恋的太明显了吧！！！（不知道你怎么想的哭哭）。\n\n跳过了就一言不发，没跳过就一句“哎呦我c”。真的很有趣啊！不知道你会不会觉得很尴尬，但我应该有点恋爱脑的滤镜吧，我真的觉得你很可爱！只可惜当时没有来得及给你拍张照片。如果，我是说如果，我俩考上了同一所高中，我一定要带家里的相机给你拍照！我已经想好了！`,
  8: `马上要中考了，我上昆中基本上是板上钉钉的事了，就是不知道你能不能上昆中，好想跟你一起升高中啊……\n\n你一定可以的吧。\n\n你是不是也喜欢我呢？`,
  9: `好可惜，你就差两分就能上昆中了，看来以后是见不了几次了。\n\n不过我还是可以线上跟你聊天的，这样想感觉就好很多了嘻嘻。\n\n你提到的那个事情，是不是在暗示什么呢。\n\n你是不是也喜欢我呢？`,
  10: `高中聊天的机会果然还是少了好多啊，最近你好像也对我爱搭不理的，主动发的消息越来越少，回复也越来越敷衍，有时候根本没有回复。\n\n你是不是在高中有了新的朋友，或者，有了喜欢的人吧。\n\n也许从一开始就是我一厢情愿，你是不是没有喜欢过我呢？没关系，我不是一个死缠烂打的人，如果你不喜欢我，我就收回我的感情。\n\n只是可能需要一点时间。`,
  11: `高考结束了，你为什么又突然来找我了呢。\n\n我想不明白，明明之前已经很久没有联系了，但是再看到你的消息还是会紧张。\n\n你还是跟以前一样幽默有趣，不过好像比之前成熟了一点。\n\n跟你坦白了我之前的想法，原来你之前真的没有喜欢我哦，还真是我自作多情了。不过如果就像这样，当个朋友其实也挺好的，友情总比爱情长久吧。`,
  12: `对不起，我还是控制不住。\n\n说不清到底为什么对你心动吧，可能是第一眼的见色起意，可能是聊天时的幽默风趣，也可能是遇到问题时的冷静分析和耐心劝导。在你面前，我好像又变成之前的那个胆小鬼，尽管我仍然不敢去猜你喜不喜欢我，我还是想说，我应该，还是喜欢你。`,
  13: `<span class="date-line">2025.8.16</span>谢谢你喜欢我。\n我也喜欢你。\n谢谢你出现在我的生活里。`
};

function addStars(count = 58) {
  const field = document.createElement('div');
  field.className = 'star-field';
  field.setAttribute('aria-hidden', 'true');
  for (let i = 0; i < count; i += 1) {
    const star = document.createElement('i');
    star.className = 'star';
    const size = `${(Math.random() * 2.4 + .7).toFixed(1)}px`;
    star.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;--size:${size};--opacity:${(Math.random() * .62 + .28).toFixed(2)};--speed:${(Math.random() * 3 + 2).toFixed(1)}s;--delay:-${(Math.random() * 5).toFixed(1)}s`;
    field.appendChild(star);
  }
  document.body.prepend(field);
}

function addAtmosphere() {
  const mist = document.createElement('div');
  mist.className = 'mist-layer';
  mist.setAttribute('aria-hidden', 'true');
  document.body.prepend(mist);
}

function enableScrollFlow() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let scheduled = false;
  const update = () => {
    const y = window.scrollY;
    const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = Math.min(y / max, 1);
    const root = document.documentElement.style;
    root.setProperty('--bg-pan-y', `${(-y * .025).toFixed(1)}px`);
    root.setProperty('--bg-shift-y', `${(-y * .035).toFixed(1)}px`);
    root.setProperty('--star-shift-y', `${(-y * .06).toFixed(1)}px`);
    root.setProperty('--mist-shift-y', `${(y * .04).toFixed(1)}px`);
    root.setProperty('--card-shift-y', `${(y * .018).toFixed(1)}px`);
    root.setProperty('--letter-shift-y', `${(y * .012).toFixed(1)}px`);
    root.setProperty('--orb-shift-right', `${(progress * 20).toFixed(2)}%`);
    root.setProperty('--orb-shift-left', `${(-progress * 28).toFixed(2)}%`);
    root.setProperty('--mist-right', `${(progress * 20).toFixed(2)}vw`);
    root.setProperty('--mist-left', `${(-progress * 18).toFixed(2)}vw`);
    root.setProperty('--story-glow-opacity', (.55 + progress * .25).toFixed(3));
    root.setProperty('--story-glow-scale', (.96 + progress * .08).toFixed(3));
    scheduled = false;
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
}

function initMusic() {
  const timeKey = 'star-confession-music-time';
  const playKey = 'star-confession-music-playing';
  const audio = document.createElement('audio');
  audio.src = 'assets/theme-song.mp3';
  audio.preload = 'auto';
  audio.loop = true;
  audio.volume = .42;
  audio.setAttribute('playsinline', '');

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'music-toggle is-paused';
  toggle.setAttribute('aria-label', '播放背景音乐');
  toggle.title = '播放背景音乐';
  document.body.append(audio, toggle);

  const setButton = (playing, needsAction = false) => {
    toggle.classList.toggle('is-paused', !playing);
    toggle.classList.toggle('needs-action', needsAction);
    toggle.textContent = needsAction ? '轻触开启音乐' : '';
    toggle.setAttribute('aria-label', playing ? '暂停背景音乐' : '播放背景音乐');
    toggle.title = playing ? '暂停背景音乐' : '播放背景音乐';
  };

  const saveTime = () => {
    if (Number.isFinite(audio.currentTime)) {
      sessionStorage.setItem(timeKey, String(audio.currentTime));
    }
  };

  const startMusic = async () => {
    try {
      await audio.play();
      sessionStorage.setItem(playKey, '1');
      setButton(true);
      return true;
    } catch {
      setButton(false, true);
      return false;
    }
  };

  audio.addEventListener('loadedmetadata', () => {
    const saved = Number(sessionStorage.getItem(timeKey));
    if (Number.isFinite(saved) && saved > 0 && saved < audio.duration) {
      audio.currentTime = saved;
    }
  }, { once: true });

  audio.addEventListener('timeupdate', saveTime);
  window.addEventListener('pagehide', saveTime);

  toggle.addEventListener('click', async () => {
    if (audio.paused) {
      await startMusic();
    } else {
      audio.pause();
      sessionStorage.setItem(playKey, '0');
      saveTime();
      setButton(false);
    }
  });

  document.querySelectorAll('.next-button, .restart-link').forEach((link) => {
    link.addEventListener('click', async (event) => {
      saveTime();
      if (!audio.paused || sessionStorage.getItem(playKey) === '0') return;
      event.preventDefault();
      const destination = link.href;
      await startMusic();
      saveTime();
      window.location.href = destination;
    });
  });

  if (sessionStorage.getItem(playKey) !== '0') {
    startMusic();
  } else {
    setButton(false);
  }
}

function renderStory() {
  const number = Number(document.body.dataset.story);
  if (!number || !chapters[number]) return;
  document.title = `${number} · 星星的告白`;
  document.body.classList.add(number <= 9 ? 'theme-bright' : number <= 11 ? 'theme-midnight' : 'theme-stars');
  if (number >= 12) addStars(42);
  const copy = document.querySelector('[data-copy]');
  if (number === 13) copy.innerHTML = chapters[number];
  else copy.textContent = chapters[number];
  const next = document.querySelector('[data-next]');
  next.href = number === 13 ? 'letter.html' : `${number + 1}.html`;
  next.textContent = number === 13 ? '写给你的信' : '继续阅读';
}

if (document.body.classList.contains('theme-stars')) addStars();
renderStory();
addAtmosphere();
enableScrollFlow();
initMusic();
