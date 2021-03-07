package com.example.myslideshow

import android.media.MediaPlayer
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentActivity
import androidx.viewpager2.adapter.FragmentStateAdapter
import androidx.viewpager2.widget.ViewPager2
import com.example.myslideshow.databinding.ActivityMainBinding
import kotlin.concurrent.timer
import kotlin.math.abs
import kotlin.math.max

class MainActivity : AppCompatActivity() {
    private lateinit var player: MediaPlayer
    class MyAdapter(fa: FragmentActivity) : FragmentStateAdapter(fa) {
        private val resource = listOf(
            R.drawable.slide00, R.drawable.slide01,
            R.drawable.slide02, R.drawable.slide03,
            R.drawable.slide04, R.drawable.slide05,
            R.drawable.slide06, R.drawable.slide07,
            R.drawable.slide08, R.drawable.slide09
        )

        override fun getItemCount(): Int  = resource.size

        override fun createFragment(position: Int): Fragment =
                ImageFragment.newInstance(resource[position])
    }

    private lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.pager.adapter = MyAdapter(this)
        binding.pager.setPageTransformer(Viewpager2PageTransformation())

        val handler = Handler(Looper.getMainLooper())
        timer(period = 5000) {
            handler.post {
                binding.apply {
                    pager.currentItem = (pager.currentItem + 1) % 10
                }
            }
        }
        player = MediaPlayer.create(this, R.raw.getdown)
        player.isLooping = true
    }

    override fun onResume() {
        super.onResume()
        player.start()
    }

    override fun onPause() {
        super.onPause()
        player.pause()
    }

    class Viewpager2PageTransformation : ViewPager2.PageTransformer {
        override fun transformPage(page: View, position: Float) {
            when {
                position < -1 -> {
                    page.alpha = 0.2f
                    page.scaleX = 0.2f
                    page.scaleY = 0.2f
                }
                position <= 1 -> {
                    page.alpha = max(0.2f, 1 - abs(position))
                    page.scaleX = max(0.2f, 1 - abs(position))
                    page.scaleY = max(0.2f, 1 - abs(position))
                }
                else -> {
                    page.alpha = 0.2f
                    page.scaleX = 0.2f
                    page.scaleY = 0.2f
                }
            }
        }
    }
}
